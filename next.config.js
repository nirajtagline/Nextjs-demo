/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["via.placeholder.com"],
    domains: ["cdn.pixabay.com", "dog.ceo", "unsplash.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
