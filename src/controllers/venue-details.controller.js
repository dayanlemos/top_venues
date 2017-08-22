angular.module('topVenuesModule').controller('VenueDetailsCtrl', ['$scope', '$stateParams', 'VenueService', function ($scope, $stateParams, VenueService) {

    var venueId = $stateParams.id;

    $scope.venue = {};

    VenueService.getVenueById(venueId).then(function (res) {
        $scope.venue = res;
        console.log(res);
    }, function (err) {
        console.log(err);
    });

}]);