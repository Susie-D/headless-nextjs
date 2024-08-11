/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    // domain for Contentful (Azure)
    images: {
        domains: ["images.ctfassets.net"]
    }
}

module.exports = withContentlayer(nextConfig);