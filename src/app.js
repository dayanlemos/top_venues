angular.module('topVenuesModule',['ui.router'])

.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $stateProvider.state({
        name: 'venue-list',
        url: '/venue-list',
        templateUrl: 'views/venue-list.html'
    })
    .state({
        name: 'venue-details',
        url: '/venue-list/:id',
        templateUrl: 'views/venue-details.html'
    });
}]);