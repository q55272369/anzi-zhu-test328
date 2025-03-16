/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require("@plaiceholder/next");
const withPWA = require('next-pwa')({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
})
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        })
        return config
    },
    images: {
        domains: ['static.anzifan.com', 'cdn.sspai.com', 'cdn.dribbble.com', 'image.freepik.com', 'avatars.githubusercontent.com', 'cdn.jsdelivr.net', 'images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.amazonaws.com',
            },
        ],
        unoptimized: true, // 禁用图片优化（静态导出需要）
    },
    output: 'export', // 启用静态导出模式
    trailingSlash: true, // 确保路径兼容性（可选）
}


module.exports =
    withPWA(
        withPlaiceholder(
            nextConfig
        )
    );
