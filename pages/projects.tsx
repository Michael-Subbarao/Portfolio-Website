import Head from 'next/head'
import Image from 'next/image'
import Projects from "../sections/Projects";


export default function projects() {
  return (
    <><Head>
      <title>Projects</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head><div>
        <Projects />
      </div></>
  )
}