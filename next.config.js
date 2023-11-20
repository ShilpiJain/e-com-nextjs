/** @type {import('next').NextConfig} */
// let imageDomains =[
//     "images4.alphacoders.com",
//     "devhero.shop"
// ]

// const nextConfig = {
//     images:{
//         domains: imageDomains
//     }
// }

module.exports = {
    images: {
      remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images4.alphacoders.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'devhero.shop',
            pathname: '**',
          }
      ],
    },
}
