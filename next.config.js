module.exports = {
  exportPathMap: async function() {
    return {
      "/": { page: "/" }
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