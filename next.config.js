/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.infura.io', 'my-music-nft.infura-ipfs.io'],
  },
};

module.exports = nextConfig;
