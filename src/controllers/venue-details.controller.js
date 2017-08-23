angular.module('topVenuesModule').controller('VenueDetailsCtrl', ['$scope', '$stateParams', 'VenueService', function ($scope, $stateParams, VenueService) {

    var venueId = $stateParams.id;

    $scope.venue = {};


    $scope.myInterval = 3000;
    $scope.slides = [];

    VenueService.getVenueById(venueId).then(function (res) {
        $scope.venue = res;
        angular.forEach($scope.venue.photos.groups[0].items, function (item, key) {
            $scope.slides.push({
                image: item.prefix+'1200x300'+item.suffix
            });
        });
        console.log(res);
    }, function (err) {
        console.log(err);
    });

}]);