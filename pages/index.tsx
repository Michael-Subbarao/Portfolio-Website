import Head from 'next/head'
import Image from 'next/image'
import Main from "../sections/Main";

export default function Home() {
  return (
    <><Head>
      <title>Michael Web Dev</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head><div>
        <Main />
      </div></>
  )
}