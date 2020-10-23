module.exports = {
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
      "/dashboard": { page: "/dashboard" },
      "/form": { page: "/form" },
      "/login": { page: "/login" },
      "/notice": { page: "/notice" },
    };
  },
  // experimental: { 
  //   reactMode: 'concurrent'
  // },
  // reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN 
    ignoreBuildErrors: true,
  }
}