import { useRouter } from 'next/router'
import Button from "../components/Button"

const About = () => {
  const router = useRouter();
  const handleClick = (e: any ,href: string | null) => {
    e.preventDefault()

    router.push(href)
  }
  return (
    <section className="h-96 mt-10 md:mt-32  md:pr-30 lg:mt-64 lg:pr-60 lg:pl-60 ">
      <h1 className="text-7xl font-bold transition ease-in-out text-blue-600 dark:text-rose-600 transition ease-in-out">About Me</h1>
      <h3 className="text-4xl my-3 transition ease-in-out"></h3>
      <p className="max-w-screen text-slate-900 dark:text-slate-100 mb-8 transition ease-in-out"> I specialize in the PERN stack (PostgreSQL, Express, React, Node). Check out some of my work!</p>
      <Button 
        className="bg-rose-600 text-slate-800 dark:bg-rose-600 text-slate-200 px-6 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110" onClick={(e)=>{handleClick(e,'/projects')}}>Check Out My Projects!</Button>
    </section>
  )
}

export default About;
