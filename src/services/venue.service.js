angular.module('topVenuesModule').service('VenueService', ['$http', '$q', function($http, $q){

    return{

        getVenues: function () {

            var api_method = '/venues/explore';
            var api_default_params = 'near=Dublin,Ireland&limit=20&section=topPicks';

            return $q(function (resolve, reject) {
                $http.get( API_FOURSQUARE_URL + api_method+'?'+api_default_params+'&client_id='+API_FOURSQUARE_CLIENT_ID+'+&client_secret='+API_FOURSQUARE_CLIENT_SECRET+'&v=20171212').then(function (res){
                    resolve(res.data.response);
                }, function (err) {
                    reject(err)
                });
            })
        },

        getVenueById: function (venueId) {

            var api_method = '/venues';

            return $q(function (resolve, reject) {
                $http.get( API_FOURSQUARE_URL + api_method+'/'+venueId+'?'+'&client_id='+API_FOURSQUARE_CLIENT_ID+'+&client_secret='+API_FOURSQUARE_CLIENT_SECRET+'&v=20171212').then(function (res){
                    resolve(res.data.response.venue);
                }, function (err) {
                    reject(err)
                });
            })
        }
    }

}])