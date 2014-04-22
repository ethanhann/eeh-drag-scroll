module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'bower_components/jquery/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/*.js',
            'test/*.js'
        ],
        exclude: [],
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS', 'Firefox', 'Chrome'],
        singleRun: true
    });
};
