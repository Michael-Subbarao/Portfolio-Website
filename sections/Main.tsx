import { useRouter } from 'next/router'
import Button from "../components/Button"

const Main = (href) => {
  const router = useRouter();
  const handleClick = (e: any , href: string | null) => {
    e.preventDefault()
    
    router.push(href)
  }
  return (
    <section className="h-96 mt-20 md:mt-64 md:pr-60 md:pl-60 ">
      <h1 className="text-7xl font-bold transition ease-in-out">Hi I am <span className="text-blue-600 dark:text-rose-600 transition ease-in-out">Michael Subbarao</span></h1>
      <h3 className="text-4xl my-3 transition ease-in-out">Full Stack Web Developer</h3>
      <p className="text-slate-900 dark:text-slate-100 mb-8 transition ease-in-out"> I specialize in the PERN stack (PostgreSQL, Express, React, Node). Check out some of my work!</p>
      <Button 
        className="bg-rose-600 text-slate-800 dark:bg-rose-600 text-slate-200 px-6 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110" onClick={(e)=>{handleClick(e,'/projects')}}>Check Out My Projects!</Button>
    </section>
  )
}

export default Main