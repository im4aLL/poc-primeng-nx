const nxPreset = require('@nx/jest/preset').default;
const path = require('path');

module.exports = { ...nxPreset, globalSetup: path.join(__dirname, 'jest.global-setup.js') };
// module.exports = { ...nxPreset };
