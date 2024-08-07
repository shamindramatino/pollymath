/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'plus.unsplash.com',
      'images.unsplash.com',
      'images.pexels.com',
      'images.ls.com',
      'img.freepik.com'
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' cdnjs.cloudflare.com ajax.googleapis.com stackpath.bootstrapcdn.com;
              style-src 'self' 'unsafe-inline' fonts.googleapis.com cdnjs.cloudflare.com stackpath.bootstrapcdn.com;
              img-src 'self' data: cdn.jsdelivr.net;
              connect-src 'self' api.yourdomain.com;
              font-src 'self' fonts.gstatic.com cdnjs.cloudflare.com;
              object-src 'none';
              frame-ancestors 'none';
              form-action 'self';
              upgrade-insecure-requests;
            `.replace(/\n/g, ''), // Remove newlines for proper CSP format
          },
        ],
      },
    ];
  },
};

export default nextConfig;
