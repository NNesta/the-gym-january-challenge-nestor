import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import Wrapper from '../components/ui/Wrapper';

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
  </Head>
  <main className='bg-[#DDDDDD]'>
  <Wrapper styles='bg-white'>
   <Navbar/>
    <Component  {...pageProps} />
    <Footer/></Wrapper></main>
  </>
  )
}