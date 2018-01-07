   (function () {
     'use strict';

      angular.module('peopleApp')
      .service('personelService', personelService);


       personelService.$inject = ['$http', '$q'];
        function personelService($http, $q){

          function getPersonel(){
            return $http.get('data/datafile.json');
           }
           
           return {
             getPersonel:getPersonel
             
           }
  
      }

   })();