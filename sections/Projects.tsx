import Head from 'next/head'
import Image from 'next/image'
import Project from "../components/Project";
import { useRouter } from 'next/router'
import Link from 'next/link'
import skills from '../pages/skills';

const projectList = [{
    title: "League of Women Voter's Representative Finder",
    description: "This app was made for the Women Voters League of Maryland to allow users to find the contact information for all of their local representatives based on their address.",
    readMore: ["This app is currently being deployed across multiple counties Women League of Voters sites in Maryland",
    "Shows the following contact details for representatives filtered on Local, State, or Federal level",
    "Name, Address (if available), Phone Number (if available) with direct phone link, Email (if available) - with direct mailto tag, Office, Photo(if available), Social Media Channels(if available) - Youtube/Twitter/Facebook with direct links"
  ],
    role: "Frontend Developer",
    image:['1-1','1-2','1-3'],
    gif: "",
    date: "March 2021",
    stack: ["react","javascript","css3","html5","axios","cypress"],
    github: 'https://github.com/Michael-Subbarao/League-of-Women-Voters-App'
},{
    title: "RESTful Web API",
    description: "RESTful API with full CRUD functionality",
    readMore: ["Built out CRUD functionality with 11 endpoints using Express and Node. Wrote custom middleware functions for validation."]
    ,
    role: "Backend Developer",
    image:"",
    gif: "",
    date: "March 2021",
    stack: ["javascript", "nodejs", "express","sqlite","knex"],
    github: 'https://github.com/Michael-Subbarao/web-sprint-challenge-adding-data-persistence'
},{
    title: "Dad Joke API",
    description: "API with login and registration endpoints that has authentication to access a dad joke library.",
    readMore: ["Added middleware functions that restrict access to resources from non-authenticated requests. Used bcrypt to hash and store passwords, and added a login function to check passwords against the stored hashes. Wrote unit tests with Jest for each API endpoint."],
    role: "Backend Developer",
    image:"",
    gif: "",
    date: "March 2021",
    stack: ["javascript","express", "postgresql","sqlite","nodejs","jest"],
    github: 'https://github.com/Michael-Subbarao/web-sprint-challenge-authentication-and-testing'
},{
    title: "Nasa Photo of the Day",
    description: ["Fetches Astronomy Photo Of The Day from Nasa API and create a react website with styled components to show it off."],
    readMore: "",
    role: "Frontend Developer",
    image:"",
    gif: "",
    date: "March 2021",
    stack: ["react","javascript","css3","html5","axios"],
    github: 'https://github.com/Michael-Subbarao/nasa-photo-of-the-day'
}]

export default function Projects() {
  //get skill variable from url
  const router = useRouter();
  const { skill } = router.query;
  const projectData = skill ? projectList.filter(project => project.stack.includes(''+ skill)):projectList;
  console.log(projectData)
  return (
    <div className="projects grid md:grid-rows-2 md:grid-cols-2 grid-cols-1 grid-rows-4 grid-flow-row justify-center items-center content-center">
      { 
          projectData.map((project)=>{
            return(
            <Project title={project.title} description= {project.description} readMore={project.readMore} role={project.role} stack={project.stack} img = {project.image} key = {project.title} github= {project.github} />
            )
          })
        
      }
    </div>
  )
}
