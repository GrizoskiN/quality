import { getServerSideProps } from 'next'
import { generateSitemap } from 'next-sitemap'

const Sitemap = () => null

export const getServerSideProps = async ({ res }) => {
  await generateSitemap({
    siteUrl: 'https://qualityestimation.us',
    // Add your dynamic routes here if needed
    // dynamicRoutes: [],
    priority: 0.5,
    changefreq: 'daily',
  })(res)
  return {
    props: {},
  }
}

export default Sitemap
