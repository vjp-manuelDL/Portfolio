/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d8j0ntlcm91z4.cloudfront.net"
      },
      {
        protocol: "https",
        hostname: "svgl.app"
      }
    ]
  }
};

export default nextConfig;
