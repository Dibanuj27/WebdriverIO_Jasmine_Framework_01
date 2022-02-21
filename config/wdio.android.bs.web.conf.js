require('dotenv').config()
import { config } from './wdio.conf';
//
// ============
// BS Creds
// ============
config.user = process.env.Browserstack_User;
config.key = process.env.Browserstack_Key;
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
    "os_version" : "10.0",  
    "device" : "Google Pixel 3",  
    "real_mobile" : "true",
    "browserName" : "Android"
   

  }
]

config.connectionRetryTimeout = 1000000;

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance  
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

const _config = config;
export { _config as config };