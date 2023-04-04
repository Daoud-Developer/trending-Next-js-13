import '../styles/globals.css';
import Head from 'next/head';
import { NewsProvider } from '../context/news/news.context';
function MyApp({ Component, pageProps }) {
    return (<>
      <Head>
        <title>Trending Now</title>
      </Head>
      <NewsProvider>
        <Component {...pageProps}/>
      </NewsProvider>
    </>);
}
export default MyApp;
