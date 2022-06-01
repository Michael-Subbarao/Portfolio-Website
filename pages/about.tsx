import Head from 'next/head'
import About from "../sections/About";
export default function about(){
return (
  <><Head>
    <title>About</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head><div>
      <About />
    </div></>
  )
}