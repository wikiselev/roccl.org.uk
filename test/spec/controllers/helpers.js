'use strict';

describe('Controller: HelpersCtrl', function () {

  // load the controller's module
  beforeEach(module('parishWebsiteApp'));

  var HelpersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelpersCtrl = $controller('HelpersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HelpersCtrl.awesomeThings.length).toBe(3);
  });
});
