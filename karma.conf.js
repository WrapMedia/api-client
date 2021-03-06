// Karma configuration
// Generated on Mon Apr 04 2016 10:34:59 GMT-0700 (PDT)

webpack = require('webpack')

var fullWebpackConfig = require('./webpack-config.coffee');

var webpackConfig = {
    module: fullWebpackConfig.module,
    resolve: fullWebpackConfig.resolve,
    coffeelint: fullWebpackConfig.coffeelint,
    cache: true,
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'exports?global.Promise!es6-promise'
        })
    ]
};

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'spec/index.coffee'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/index.coffee': ['webpack']
    },


    plugins: [
        'karma-jasmine',
        'karma-phantomjs-launcher',
        'karma-webpack',
        'karma-spec-reporter'
    ],


    webpack: webpackConfig,

    webpackMiddleware: {
        noInfo: true
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
