const path = require('path');
const Dotenv = require('dotenv-webpack');
const dev = process.env.NODE_ENV !== 'production';
module.exports = {
  webpack: (config) => {
    config.plugins.push(new Dotenv({
        path: path.join(__dirname, dev ? '.env.development' : '.env.production'),
        systemvars: true
    }));
    config.resolve.extensions = ['.js', '.jsx'];
    return config
},
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

  typescript: {
    ignoreBuildErrors: true,
  }
}