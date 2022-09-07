import Head from 'next/head'
import Image from 'next/image'
import Hero from "../components/Hero"
import About from "../components/About"
import Staff from "../components/Staff"
import Service from "../components/Service"
import Contact from "../components/Contact"
export default function Home() {
  return (
    <>
      <Head>
        <title>One Stone Limited</title>
      </Head>
      <Hero />
      <About />
      <Service />
      <Staff />
      <Contact />
    
    </>
    
  )
}
