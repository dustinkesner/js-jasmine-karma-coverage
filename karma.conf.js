var browsers = {
    sl_chrome_10_50: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'Windows 7',
        version: 'latest'
    }
};

var browserKeys = Object.keys(browsers);

module.exports = function (config) {
    config.set({
        basePath: '',
        autoWatch: true,
        frameworks: ['jasmine'],
        files: [
            'sqrt.js',
            'test/spec/*.js'
        ],
        
        browsers: ['Chrome'],
        //browsers: browserKeys,
        sauceLabs: {
            testName: "karma-test",
            startConnect: false,
            username: process.env.SAUCE_USERNAME,
            accessKey: process.env.SAUCE_ACCESS_KEY,
            parentTunnel: "nmadmin",
            tunnelIdentifier: "nmadmin-temp-tunnel"
        },
        customLaunchers: browsers,

        reporters: ['progress', 'coverage'],
        preprocessors: { '*.js': ['coverage'] },

        singleRun: true
    });
};