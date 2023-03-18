import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="favicon" sizes="180x180" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <body className="bg-lp-white text-lp-black dark:bg-lp-gray-8 dark:text-lp-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
