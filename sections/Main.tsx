import { useRouter } from 'next/router'
import Button from "../components/Button"

const Main = (href) => {
  const router = useRouter();
  const handleClick = (e: any , href: string | null) => {
    e.preventDefault()
    
    router.push(href)
  }
  return (
    <section className="h-96 mt-48">
      <h1 className="text-7xl font-bold">Hi I am <span className="text-blue-600 dark:text-rose-600">Michael Subbarao</span></h1>
      <h3 className="text-4xl my-3">I am Full Stack Web Developer</h3>
      <p className="text-slate-50 mb-8">About Me!</p>
      <Button 
        className="bg-rose-600 text-slate-800 dark:bg-sky-600 text-slate-100 px-6" onClick={(e)=>{handleClick(e,'/projects')}}>Check Out My Projects!</Button>
    </section>
  )
}

export default Main