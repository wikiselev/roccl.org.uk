'use strict';

describe('Directive: pimax', function () {

  // load the directive's module
  beforeEach(module('parishWebsiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pimax></pimax>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pimax directive');
  }));
});
