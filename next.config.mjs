/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    ignoreDuringBuilds: true, 
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.externals.push({ canvas: 'commonjs canvas' })
    return config
  },

};

export default nextConfig;
