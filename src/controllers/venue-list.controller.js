angular.module('topVenuesModule').controller('VenueListCtrl', ['$scope', '$stateParams', '$state', '$log','VenueService', function ($scope, $stateParams, $state, $log, VenueService) {

    $scope.location = 'Dublin';
    $scope.venues = {};
    var page = $stateParams.page;

    $scope.pageChanged = function(page) {
        $state.go('venue-list', {page:page});
    };

    VenueService.getVenues(page).then(function (res) {
        $scope.venues = res;

        //Pagination configs
        $scope.currentPage = page;
        $scope.totalItems = res.totalResults;
        $scope.itemsPerPage = 15;

    }, function (err) {
        console.log(err);
    });

}]);