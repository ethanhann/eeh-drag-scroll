'use strict';

angular.module('eehDragScrollApp', ['ngRoute', 'eehUi']);

angular.module('eehDragScrollApp').config(function ($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
            .otherwise({ redirectTo: '/' });
    });
