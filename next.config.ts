// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ❌ This will allow production builds to successfully complete
    // even if your project has type errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
