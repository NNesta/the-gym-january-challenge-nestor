import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
  </Head>
   <Navbar/>
    <Component  {...pageProps} />
    <Footer/>
  </>
  )
}