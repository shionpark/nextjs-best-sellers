/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["storage.googleapis.com"], // 사용할 이미지 호스트 추가
  },
};

module.exports = nextConfig;
