export default async function SitemapXml(req, res) {
    const yoastSitemapUrl = 'https://blog.gobro.studio/sitemap_index.xml'; 
    const response = await fetch(yoastSitemapUrl);
    const sitemapXml = await response.text();
  
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(sitemapXml);
  }