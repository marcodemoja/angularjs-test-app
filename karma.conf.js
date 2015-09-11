/**
 * Created by demojam on 04/09/2015.
 */

module.exports = function(config) {
    config.set({

        //base path that will be used to resolve all patterns ( eg. files, exclude )
        basePath: '',

        //framework to use
        frameworks: ['jasmine'],

        files: [
            'bower_components/jquery/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_component/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/restangular/dist/restangular.js',
            'bower_components/underscore/underscore.js',
            'test/**/*Spec.js',
            'source/**/*.js'
        ],

        //list of files to exlude
        exclude: [

        ],

        //preprocess matching files before serving them to the browser
        //available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessor: {

        },

        //test result reporter to use
        //possible values: 'dots', 'progress'
        //available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        //web server port
        port: 9876,

        //enable/disable colours in the output
        colors: true,

        //level of logging
        //possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        //enable/disable watching file and executing tests whenever any file changes
        autoWatch: false,

        //start these browsers
        //available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        //Continuous Integration mode
        //if true, Karma captures browsers, runs the tests and exits
        singleRun: true


    });

};