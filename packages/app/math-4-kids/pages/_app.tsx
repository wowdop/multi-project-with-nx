import { AppProps } from 'next/app';
import Head from 'next/head';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to math-4-kids!</title>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default CustomApp;
