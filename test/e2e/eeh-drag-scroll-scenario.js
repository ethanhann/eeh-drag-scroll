'use strict';

describe('eeh-drag-scroll', function () {
    var wrapper,
        topLayer;

    beforeEach(function() {
        browser.get('index.html');
        wrapper = element(by.css('.eeh-drag-scroll'));
        topLayer = element(by.css('.eeh-drag-scroll-top-layer'));
    });

    it('should initially hide top layer', function () {
        expect(topLayer.getAttribute('style')).toEqual('display: none;');
    });

    it('should show top layer on mouse down', function () {
        browser.actions().mouseDown(wrapper).perform();

        expect(topLayer.getAttribute('style')).toEqual('display: block;');
    });

    it('should hide top layer on mouse up', function () {
        browser.actions().mouseDown(wrapper).mouseUp(wrapper).perform();

        expect(topLayer.getAttribute('style')).toEqual('display: none;');
    });
});
