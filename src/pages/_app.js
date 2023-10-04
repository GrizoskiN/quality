import '@/styles/globals.css'
import localFont from "next/font/local"
export const industryFont = localFont({ src: [
  {path: "../pages/font/Industry-Book.woff2", weight:"200"},
  {path: "../pages/font/Industry-Bold.woff2", weight:"600"},
  {path: "../pages/font/Industry-Medium.woff2", weight:"400"},
  {path: "../pages/font/Industry-MediumItalic.woff2", weight:"400", style:"italic"},
],
variable:"--Industry-font"
})
export default function App({ Component, pageProps }) {
  return (
    <main className={industryFont.className}>
  <Component {...pageProps} />
  </main>)
}
