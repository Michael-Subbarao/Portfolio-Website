import Head from 'next/head'
import Image from 'next/image'
import Project from "../sections/Project";

const projectList = [{
    title: "League of Women Voter's Representative Finder",
    description: "This app was made for the Women Voters League of Maryland to allow users to find the contact information for all of their local representatives based on their address.",
    readMore: "",
    role: "Personal Project",
    image:"",
    gif: "",
    date: "March 2021"
},{
    title: "Project 2",
    description: "This app was made for the Women Voters League of Maryland to allow users to find the contact information for all of their local representatives based on their address. This app is currently being deployed across multiple counties Women League of Voters sites in Maryland. See: (https://www.lwvwashco.org/representatives) for an example.",
    readMore: "",
    role: "Personal Project",
    image:"",
    gif: "",
    date: "March 2021"
},{
    title: "Project 3",
    description: "This app was made for the Women Voters League of Maryland to allow users to find the contact information for all of their local representatives based on their address. This app is currently being deployed across multiple counties Women League of Voters sites in Maryland. See: (https://www.lwvwashco.org/representatives) for an example.",
    readMore: "",
    role: "Personal Project",
    image:"",
    gif: "",
    date: "March 2021"
},{
    title: "Project 4",
    description: "This app was made for the Women Voters League of Maryland to allow users to find the contact information for all of their local representatives based on their address. This app is currently being deployed across multiple counties Women League of Voters sites in Maryland. See: (https://www.lwvwashco.org/representatives) for an example.",
    readMore: "",
    role: "Personal Project",
    image:"",
    gif: "",
    date: "March 2021"
}]
export default function projects() {
  return (
    <div className=" projects grid grid-rows-2 grid-cols-2 gap-30 grid-flow-col gap-7 justify-center items-center content-center">
      {
          projectList.map((project)=>{
            return(
            <Project title={project.title} description= {project.description} readMore={project.readMore} role={project.role} key = {project.title}/>
            )
          })
      }
    </div>
  )
}