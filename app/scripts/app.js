'use strict';

/**
 * @ngdoc overview
 * @name parishWebsiteApp
 * @description
 * # parishWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('parishWebsiteApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource', 
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mailchimp'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts'
      })
      .when('/services', {
        templateUrl: 'views/services.html'
      })
      .when('/address', {
        templateUrl: 'views/address.html',
        controller: 'AddressCtrl',
        controllerAs: 'address'
      })
      .when('/helpers', {
        templateUrl: 'views/helpers.html',
        controller: 'HelpersCtrl',
        controllerAs: 'helpers'
      })
      .when('/building', {
        templateUrl: 'views/building.html',
        controller: 'BuildingCtrl',
        controllerAs: 'building'
      })
      .when('/donations', {
        templateUrl: 'views/donations.html',
        controller: 'DonationsCtrl',
        controllerAs: 'donations'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
