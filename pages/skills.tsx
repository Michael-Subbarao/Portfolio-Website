import Head from 'next/head'
import Image from 'next/image'
import Skills from "../sections/Skills";


export default function skills() {
  return (
    <><Head>
      <title>Skills</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head><div>
        <Skills />
      </div></>
  )
}