import Head from 'next/head'
import Image from 'next/image'
import Contact from "../sections/Contact";

export default function contact() {
    return (
        <><Head>
            <title>Contact</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head><div className="md:mx-48 2xl:mx-96 md:mt-20">
                <Contact />
            </div></>
    )
}