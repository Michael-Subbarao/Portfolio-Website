/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'

const About = () => {
  return (
    <section className="h-96 mt-10 md:mt-24  md:pr-30 lg:mt-48 lg:pr-48 lg:pl-60 ">
      <h1 className="text-7xl font-bold transition ease-in-out text-blue-600 dark:text-rose-600 transition ease-in-out">About Me</h1>
      <h3 className="text-4xl my-3 transition ease-in-out"></h3>
      <p className="max-w-screen font-semi-bold  text-slate-900 text-lg dark:text-slate-200 text-slate-700 mb-8 transition ease-in-out"> I have a passion for Web Development and Japanese. After learning Javascript during my Bachelor's Degree in Japan at Yamanashi Gakuin University, 
      I found a deep love of programming. I love learning languages and I have found programming languages no different. I've found I can even apply all of the same language learning techniques I used to learn Japanese to languages like JavaScript.
      My goal is to become fluent enough to start dreaming in JavaScript in the same way I do Japanese or English.<br /><br />
      When I'm not learning new Web Development skills, I'm honing my language learning skills.</p>
      
    </section>
  )
}

export default About;
