'use strict';

angular.module('eehUi', []).directive('eehDragScroll', function () {
    return {
        restrict: 'AE',
        transclude: true,
        template: '<div><div class="eeh-drag-scroll-top-layer"></div><div ng-transclude></div></div>',
        link: function (scope, element) {
            element.css('width', '100%')
                .css('overflow-x', 'auto')
                .css('overflow-y', 'auto')
                .css('-ms-overflow-style', '-ms-autohiding-scrollbar')
                .css('-webkit-overflow-scrolling', 'touch');
            element.find('[ng-transclude] > :last-child').css('margin-bottom', '0');w
            var topLayer = element.find('.eeh-drag-scroll-top-layer');
            topLayer.hide();
            topLayer.css('position', 'absolute')
                .css('top', '0')
                .css('left', '0')
                .css('width', '100%')
                .css('height', '100%')
                .css('z-index', '2');
            element.mousedown(function () {
                topLayer.show();
            });

            element.mouseup(function () {
                topLayer.hide();
            });
            element.mousemove(function (event) {
                if (topLayer.is(":visible")) {
                    var mouseX = event.pageX - element.offset().left;
                    element.scrollLeft(mouseX);
                }
            });
        }
    }
});