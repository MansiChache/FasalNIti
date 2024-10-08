// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// module.exports = {
//     async redirects() {
//       return [
//         {
//           source: '',
//           destination: '/index.html',
//           permanent: true,
//         },
//       ];
//     },
//   };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async redirects() {
//       return [
//         {
//           source: '/',
//           destination: '/index.html', // Redirect homepage to your static index.html
//           permanent: true,
//         },
//       ];
//     },
//   }
  
//   module.exports = nextConfig;
  
// Use ES module syntax for .mjs files
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/index.html', // Redirect homepage to your static index.html
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  