'use strict';

describe('Test eeh-drag-scroll', function () {
    var $compile,
        $scope;

    beforeEach(module('eehUi'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
    }));

    it('should create a hidden top layer', inject(function () {
        var element = $compile('<div eeh-drag-scroll></div>')($scope);

        $scope.$digest();

        var topLayer = element.find('div.eeh-drag-scroll-top-layer');
        expect(topLayer.is(":visible")).toBe(false);
    }));
});