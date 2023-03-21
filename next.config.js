const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  dangerouslyAllowSVG: true,
  reactStrictMode: true,
  // ...
})
