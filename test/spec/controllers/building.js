'use strict';

describe('Controller: BuildingCtrl', function () {

  // load the controller's module
  beforeEach(module('parishWebsiteApp'));

  var BuildingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuildingCtrl = $controller('BuildingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BuildingCtrl.awesomeThings.length).toBe(3);
  });
});
