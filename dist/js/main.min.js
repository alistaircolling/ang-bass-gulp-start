// app.js
//the routerApp used for all routing of states, views and URLs

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    // add states to the state provider
    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
        url: '/home',
        templateUrl: 'partial-home.html',
        controller: function($scope) {}
    })

    // NESTED STATE ADDRESSED USING DOT SYNTAX ================================
    .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Fenella', 'Monty', 'Coco'];
            }
        })
        //nested paragraph with a string passed in template. again, presumably the template could specify
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'This was text passed from the router config.'
        })

    //GALLERY ===========
    .state('location', {
        url: '/location',
        templateUrl: 'partial-location.html',
        controller: function($scope) {
            // reset the scroll
        }
    })

    //beds  ========

    //GALLERY ===========
    .state('beds', {
        url: '/beds',
        views: {
            '': {
                templateUrl: 'partial-beds.html'
            },
            'columnOne@beds': {
                template: 'All rooms come with tea and coffee making facilities'
            },
            'columnTwo@beds': {
                templateUrl: 'room-types.html',
                controller: 'pricesController'
            }
        }
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
        url: '/about',
        views: {
            //main template (notice blank string key)
            '': {
                templateUrl: 'partial-about.html',
                controller: function($scope) {
                    // reset the scroll
                }
            }

        }

    });

});


//MAPPING a controller to the router - as above is it better to do this in a separete js file hmm?

//this is the controller that is defined above that is used in the 'about' state

routerApp.controller('pricesController', function($scope) {

    $scope.message = 'test';

    $scope.rooms = [{
        name: 'Basic',
        price: 50,
        image: 'http://www.designtripper.com/wp-content/uploads/2011/10/IMG_0202.jpg',
        description: 'This is the cheapest room that we have.'

    }, {
        name: 'Pretty Fancy',
        price: 100,
        image: 'http://graphics8.nytimes.com/images/2011/04/05/t-magazine/05soho-casale/05soho-casale-custom1.jpg',
        description: 'This is the mid-range suite.'

    },{
        name: 'Executive Suite',
        price: 200,
        image: 'http://www.psstructures.com.au/wp-content/gallery/hospitality-presidential-suite/presidential-suite-3.jpg',
        description: 'This is our best room.'

    }]
})
