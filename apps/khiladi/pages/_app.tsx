import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Footer } from '../components/Footer';
import KhiladiLogo from '../public/images/khiladi-logo.png';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to khiladi!</title>
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
