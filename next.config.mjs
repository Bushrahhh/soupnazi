// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    // Remove all experimental.appDir references
    experimental: {
      turbo: {
        // Add any Turbopack-specific config here if needed
      }
    }
  }
  
  export default nextConfig;