   (function () {
     'use strict';

      angular.module('peopleApp')
       .controller('UserController', UserController);

       UserController.$inject = ['$scope', 'personelService', '$mdSidenav', '$timeout'];
       
       function UserController($scope, personelService, $mdSidenav, $timeout){
         const vm = this;

         vm.selected   = null;
         vm.listData   = [];
         vm.selectUser = selectUser;
         vm.openSidebar = openSidebar;
         // vm.closeSidebar = closeSidebar;
         // vm.toggleList   = toggleUsersList;
     

        personelService.getPersonel()
          .then(function (data){
           const info = data.data;
            vm.listData.push(info);
            vm.selected = info[0];
     
          });


       // function toggleUsersList() { //hide/show the sidenav
       //  $mdSidenav('left').toggle();
       // }


       function openSidebar () {
        $mdSidenav('left').open();
      }

      // function closeSidebar (){
      //   $mdSidenav('left').close();
      // }
     
      function selectUser (person) {
       vm.selected =  person;
       }

    }

   })();