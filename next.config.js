/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [{hostname : 't4.ftcdn.net'}, {hostname : 't3.ftcdn.net'}, {hostname: 'images.pexels.com'}]
    }
};

module.exports = nextConfig;
