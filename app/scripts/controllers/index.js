'use strict';

/**
 * @ngdoc function
 * @name parishWebsiteApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the parishWebsiteApp
 */
angular.module('parishWebsiteApp')
  .controller('IndexCtrl', function($scope, $location) {
	$scope.isActive = function (viewLocation) {
	     var active = (viewLocation === $location.path());
	     return active;
	};
  });

