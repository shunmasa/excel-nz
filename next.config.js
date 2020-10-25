const withSass = require('@zeit/next-sass')
// const path = require('path');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
})


// const dev = process.env.NODE_ENV !== 'production';
// module.exports = {
//     webpack: (config) => {
//         config.plugins.push(new Dotenv({
//             path: path.join(__dirname, dev ? '.env.development' : '.env.production'),
//             systemvars: true
//         }));
//         config.resolve.extensions = ['.js', '.jsx'];
//         return config
//     }
// };



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