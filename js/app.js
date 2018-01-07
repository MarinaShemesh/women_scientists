   (function () {
     'use strict';

      angular.module('peopleApp', ['ngMaterial'])
          .config(function($mdIconProvider, $mdThemingProvider){
         // Register the menu icon
            $mdIconProvider.icon("menu", "js/svg/menu.svg", 24);
              
            $mdThemingProvider.theme('default')
                          .primaryPalette('grey')
                          .accentPalette('red');

        });

   })();