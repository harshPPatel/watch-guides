import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Footer } from '../components/Footer';
import AppleTouchIcon from '../public/images/apple-touch-icon.png';
import Favicon16 from '../public/images/favicon-16x16.png';
import Favicon32 from '../public/images/favicon-32x32.png';
import KhiladiLogo from '../public/images/khiladi-logo.png';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to khiladi!</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={AppleTouchIcon.src}
        />
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon32.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon16.src} />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <Footer
        logo={KhiladiLogo}
        franchiseTitle={pageProps.title || 'Franchise'}
      />
    </>
  );
}

export default CustomApp;
