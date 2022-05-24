import Head from 'next/head'
import Image from 'next/image'
import Main from "../sections/Main";

export default function Home() {
  return (
    <div className = "">
      <Head>
        <title>Michael Web Dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Main />
      </div>
  )
}