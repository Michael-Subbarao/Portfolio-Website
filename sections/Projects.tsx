import Head from 'next/head'
import Image from 'next/image'
import Project from "../components/Project";

const projectList = [{
    title: "League of Women Voter's Representative Finder",
    description: "This app was made for the Women Voters League of Maryland to allow users to find the contact information for all of their local representatives based on their address.",
    readMore: "",
    role: "Personal Project",
    image:['1-1','1-2','1-3'],
    gif: "",
    date: "March 2021",
    stack: ["react","javascript","css3","html5","axios","cypress"]
},{
    title: "RESTful Web API",
    description: "RESTful API with full CRUD functionality",
    readMore: "Built out CRUD functionality with 11 endpoints using Express and Node. Wrote custom middleware functions for validation."
    ,
    role: "Backend Developer",
    image:"",
    gif: "",
    date: "March 2021",
    stack: ["javascript", "nodejs", "express","sqlite","knex"]
},{
    title: "Dad Joke API",
    description: "API with login and registration endpoints that has authentication to access a dad joke library.",
    readMore: "Added middleware functions that restrict access to resources from non-authenticated requests. Used bcrypt to hash and store passwords, and added a login function to check passwords against the stored hashes. Wrote unit tests with Jest for each API endpoint.",
    role: "Backend Developer",
    image:"",
    gif: "",
    date: "March 2021",
    stack: ["javascript","express", "postgresql","sqlite","nodejs","jest"]
},{
    title: "Nasa Photo of the Day",
    description: "Fetches Astronomy Photo Of The Day from Nasa API and create a react website with styled components to show it off.",
    readMore: "",
    role: "Frontend Developer",
    image:"",
    gif: "",
    date: "March 2021",
    stack: ["react","javascript","css3","html5","axios"]
}]

export default function projects() {
  return (
    <div className="projects grid md:grid-rows-2 md:grid-cols-2 grid-cols-1 grid-rows-4 grid-flow-col justify-center items-center content-center">
      {
          projectList.map((project)=>{
            return(
            <Project title={project.title} description= {project.description} readMore={project.readMore} role={project.role} stack={project.stack} img = {project.image} key = {project.title}/>
            )
          })
      }
    </div>
  )
}
