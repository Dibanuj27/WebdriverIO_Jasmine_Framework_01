import { join } from 'path';
import { config } from './wdio.conf';

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  './test/specs/ios_native*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "15.3",
    "appium:deviceName": "iPhone 11",
    "appium:automationName": "XCUITest",
    "appium:app": join(process.cwd(), "./app/iOS/UIKitCatalog.app")

  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];

const _config = config;
export { _config as config };