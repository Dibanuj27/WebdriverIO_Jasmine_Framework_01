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
  './test/specs/android_native*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "Pixel 3",
    "appium:automationName": "UIAutomator2",
    "appium:app": join(process.cwd(), "./app/android/ECommerce_Demo_v3.apk")

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