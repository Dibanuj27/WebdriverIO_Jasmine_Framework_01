import { config } from './wdio.conf';
//
// ============
// BS Creds
// ============
config.user = 'oauth-webdriveriojasmine-7a9f1';
config.key = 'f89bba6c-8d0a-4bd2-beef-3986c436eba9';
//
// ============
// Specs
// ============
config.specs = [
  './test/specs/android_native*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "iOS",
    "appium:platformVersion": "15.0",
    "appium:deviceName": "iPhone 11 Simulator",
    "appium:automationName": "XCUITest",
    "appium:app": "759d628c-bb77-4ba0-8451-a3d6689254f9",

  }
]

config.connectionRetryTimeout = 1000000;

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance  
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['sauce'];

const _config = config;
export { _config as config };