const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
})

module.exports = {
  
  exportPathMap: async function() {

    return {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
      // "/dashboard": { page: "/dashboard" },
      "/form": { page: "/form" },
      "/login": { page: "/login" },
      // "/notice": { page: "/notice" },
    };
  },
  // experimental: { 
  //   reactMode: 'concurrent'
  // },
  // reactStrictMode: true,
  typescript: {
  
    ignoreBuildErrors: true,
  }
}