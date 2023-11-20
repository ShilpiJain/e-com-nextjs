/** @type {import('next').NextConfig} */
let imageDomains =[
    "images4.alphacoders.com",
    "devhero.shop"
]

const nextConfig = {
    images:{
        domains: imageDomains
    }
}

module.exports = nextConfig
