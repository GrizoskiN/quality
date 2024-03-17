import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-XHTYEDSRH5"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XHTYEDSRH5');
              `,
            }}
          ></script>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/bwp0bnl.css"></link>
        <link rel="shortcut icon" href='/img/logo.png'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
