import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Submenu from "@/components/Submenu";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import ScrollToTopButton from "@/components/scrollToTop";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";

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
  const [active, setActive] = useState(false);
  const handleActive = (e) => {
    setActive(!active);
  };

  const router = useRouter();
  return (
  
    <ApolloProvider client={client} >
      <main className={industryFont.className}>
        <Menu handleMenus={handleActive} />
        {/* <Submenu /> */}
        <ScrollToTopButton />
        <AnimatePresence key={router.asPath} mode="wait">
          <main>
            <Component {...pageProps} />
          </main>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}></motion.div>
          <motion.div
            className="slide-in"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 1.6,
              delay: 0.01,
              ease: [0.22, 1, 0.36, 1],
            }}></motion.div>
        </AnimatePresence>

        <Footer />
      </main>
    </ApolloProvider>
  

  );
}
