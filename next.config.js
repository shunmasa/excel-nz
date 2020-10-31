
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

  typescript: {
    ignoreBuildErrors: true,
  }
}