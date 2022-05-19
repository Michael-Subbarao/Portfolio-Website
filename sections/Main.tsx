import { useRouter } from 'next/router'
import Button from "../components/Button"

const Main = (href) => {
  const router = useRouter();
  const handleClick = (e,href) => {
    e.preventDefault()
    
    router.push(href)
  }
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">Hi I am <span className="dark:text-purple-600">Michael Subbarao</span></h1>
      <h3 className="text-4xl my-3">I am Full Stack Web Developer</h3>
      <p className="text-gray-700 mb-8">About Me!</p>
      <Button 
        className="bg-purple-600 text-white px-6" onClick={(e)=>{handleClick(e,'/projects')}}>Check Out My Projects!</Button>
    </section>
  )
}

export default Main