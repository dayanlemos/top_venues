angular.module('topVenuesModule',['ui.router', 'ui.bootstrap'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('venue-list/1');

    $locationProvider.hashPrefix('');

    $stateProvider.state({
        cache: false,
        name: 'venue-list',
        url: '/venue-list/:page',
        templateUrl: 'views/venue-list.html',
        controller: 'VenueListCtrl'
    })
    .state({
        name: 'venue-details',
        url: '/venue-list/:page/:id',
        templateUrl: 'views/venue-details.html',
        controller: 'VenueDetailsCtrl'
    });
}]);

