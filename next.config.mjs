import withMDX from '@next/mdx'

// Contains the configuration for Next.js
// with MDX support
const nextConfig = withMDX({
  extension: /\.mdx?$/
})({
  devIndicators: false,
  pageExtensions: ['js', 'jsx', 'mdx'],
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
})

export default nextConfig
