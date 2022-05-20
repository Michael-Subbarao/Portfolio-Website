import { useRouter } from 'next/router'
import Button from "../components/Button"
import Image from 'next/image';

const Project = (props: any) => {
  const router = useRouter();
  const {title,description,path,role,date,stack} = props
  const handleClick = (e: any , href: string | null) => {
    e.preventDefault();
    router.push(href);
  }
  return (
    <div className="">
    
    <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md h-full w-full">
      <h2 className="text-gray-700 font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mt-4">{description}</p>
      <div className="flex items-center mt-8 lg:mt-4">
        <div className="flex items-center">
         {path && <Image className="h-10 w-10 rounded-full" src={path} alt="" />}
          <div className="ml-4">
            <p className="text-gray-800 text-sm font-semibold">{role}</p>
            <p className="text-gray-600 text-sm">{date}</p>
          </div>
        </div>
        <div className = "relative h-10 flex space-between pr-15">
        {stack && stack.map((tech,i)=>{
          return(<Image  width= "60" height = "50px"  src={"/../design_assets/icons/" + tech + ".svg"} alt = {tech +" logo"} key ={i}/>)
        })}
        </div>
        <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" 
          /></svg>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Project;