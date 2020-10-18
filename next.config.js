module.exports = {
  experimental: { granularChunks: true ,
    reactMode: 'concurrent'
  },
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN 
    ignoreBuildErrors: true,
  }
}