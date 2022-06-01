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
      <DownArrow />
      <section className="min-h-max mb-[20%] md:mb-[30%]">
        <Main />
      </section>
      <section className="min-h-max md:mb-60">
        <About />
      </section>
      <section className="min-h-max mb-10 md:mb-60">
        <Skills />
      </section>
      <section className="min-h-max md:mb-60">
        <Projects />
      </section>
      <section className="min-h-max">
        <Contact />
      </section>
    </div>
    </>
  )
}