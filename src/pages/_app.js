import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Submenu from "@/components/Submenu";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import ScrollToTopButton from "@/components/scrollToTop";
export const industryFont = localFont({
  src: [
    { path: "../pages/font/Industry-Book.woff2", weight: "200" },
    { path: "../pages/font/Industry-Bold.woff2", weight: "600" },
    { path: "../pages/font/Industry-Medium.woff2", weight: "400" },
    {
      path: "../pages/font/Industry-MediumItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--Industry-font",
});
export default function App({ Component, pageProps }) {
  return (
      <ApolloProvider client={client}>
    <main className={industryFont.className}>
      <Menu />
      {/* <Submenu /> */}
      <ScrollToTopButton/>
        <Component {...pageProps} />
        <Footer/>
    </main>
      </ApolloProvider>
  );
}
