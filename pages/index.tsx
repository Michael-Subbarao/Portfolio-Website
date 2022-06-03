import Head from 'next/head'
import Image from 'next/image'
import Main from "../sections/Main";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import About from "../sections/About";
import DownArrow from "../components/DownArrow";

export default function Home() {
  return (
    <><div className="" id="modal-root">
      <Head>
        <title>Michael Web Dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      { 
      <DownArrow />
      }
      <section className="min-h-max mb-[40%] lg:mb-[30%]">
        <Main />
      </section>
      <section className="min-h-max mb-[20%] lg:mb-[35%]">
        <About />
      </section>
      <section className="min-h-max mb-10">
        <Skills />
      </section>
    </div>
    </>
  )
}