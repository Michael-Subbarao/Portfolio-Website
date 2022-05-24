import Head from 'next/head'
import Image from 'next/image'
import Contact from "../sections/Contact";

export default function contact() {
    return (
    <div className="md:mx-48 2xl:mx-96 md:mt-20">
        <h1 className="ml-1 md: ml-10 text-7xl font-bold transition ease-in-out">Contact <span className="text-blue-600 dark:text-rose-600 transition ease-in-out">Me</span></h1>
        <Contact />
    </div>
    )
}