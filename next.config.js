const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

let nextConfig = {};

nextConfig = withBundleAnalyzer(nextConfig);

module.exports = nextConfig;
