import Head from 'next/head'
import { Inter } from '@next/font/google';
import HeroSection from '../components/sections/HeroSection';
import Section1 from '../components/sections/Section1';
import Section2 from '../components/sections/Section2';
import InformationSection from '../components/sections/InformationSection';
import ContactSection from '../components/sections/ContactSection';
import Wrapper from '../components/ui/Wrapper';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Study programs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-screen w-full flex justify-center items-center'>
        <h1 className='text-4xl font-bold'>This is a Page 3</h1>
        
        </div>
    </>
  )
}
