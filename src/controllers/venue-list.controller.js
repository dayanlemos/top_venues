angular.module('topVenuesModule').controller('VenueListCtrl', ['$scope','VenueService', function ($scope, VenueService) {

    $scope.venues = {};

    VenueService.getVenues().then(function (res) {
        $scope.venues = res;
        console.log(res);
    }, function (err) {
        console.log(err);
    });

}]);