import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bradleymotorspares.co.zw',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.bradleymotorspares.co.zw/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.bradleymotorspares.co.zw/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://www.bradleymotorspares.co.zw/products',
      lastModified: new Date(),
    },
  ]
}