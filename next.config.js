/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    // domain for Contentful (Azure)
    images: {
        domains: ["images.ctfassets.net"]
    }
}

module.exports = nextConfig;