require('dotenv').config()
import { config } from './wdio.conf';


// ====================
// Runner Configuration
// ====================
config.user = process.env.Browserstack_User;
config.key = process.env.Browserstack_Key;
//
// config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  './test/specs/android_web*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    "os_version" : "14.0",  
    "device" : "iPhone 11",  
    "real_mobile" : "true",
    "browserName" : "ios"

  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

const _config = config;
export { _config as config };