/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Modal from './ProjectModal'
import Button from "./Button"
import Image from 'next/image';
import Carousel from './Carousel'
import next from 'next';

/**
 * 
 * <div className="shadow-lg">
      <div className="transition ease-in-out bg-slate-200 dark:bg-slate-300 p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md h-full w-full">
      <div className="float-right flex ">
        <p className="prose prose-slate text-slate-700 text-xs md: text-s font-semibold">
              Read More
            </p>
            <div
              className="w-8 h-8 bg-gray-100 hover:bg-gray-400 rounded-t-lg flex items-center justify-center"
              title="Read More"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  fill="#6E8098"
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
              
            </div>
            
          </div>
          
        <div className="flex flex-column">
          <h2 className="text-gray-700 font-semibold float-left">{title}</h2>
        </div>
        <p className="text-sm text-gray-600 mt-4 mb-4 md:mb-8">{description}</p>
        {img && <Carousel images={img} />}
        <div className="flex items-center mt-8 lg:mt-4">
          <div className="flex items-center flex-row">
            <div className="md:mr-4">
              <p className="text-gray-800 text-sm font-semibold">{role}</p>
              <p className="text-gray-600 text-sm">{date}</p>
            </div>
          </div>
          <div className="relative md:h-10 flex space-between pr-15">
            {stack &&
              stack.map((tech, i) => {
                return (
                  <Image
                    width="60px"
                    height="50px"
                    src={"/design_assets/icons/" + tech + ".svg"}
                    alt={tech + " logo"}
                    title={tech + " logo"}
                    key={i}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
 *  
 */

const Project = (props: any) => {
  const router = useRouter();
  const { title, description, readMore, img, gif, role, date, stack ,github } = props;
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = (e: any, href: string | null) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <div className="p-4 ml-[5%] rounded-2xl bg-slate-50 dark:bg-slate-600 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 justify-center w-[90%]">
      <div className="mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-blue-400 dark:text-rose-400 flex flex-row gap-10">{role}<a className = "dark:bg-slate-300 rounded-full  w-8 h-8 md:h-10 md:w-10" href={github} target="_blank" rel="noopener noreferrer">
          <img
                    className="dark:stroke-1 w-8 h-8 md:h-10 md:w-10"
                    src="/design_assets/icons/github.svg"
                    alt="GitHub logo"
                    title="GitHub logo"
                  />
          </a></p>
        <h1 className="m-2 text-xl md:text-4xl font-bold text-slate-700 dark:text-slate-200">
          {title}
          </h1>
        <p className="m-2 text-sm italic text-slate-700 dark:text-slate-200">
          {description}
        </p>
        <div className="shadow-md dark:shadow-none  basis-2/3 relative mb-8">
          {img && <Carousel images={img} />}
        </div>

        <div className="flex flex-row r items-center">
          <button
           onClick={() => setIsOpen(true)}
           className="md:m-2 m-auto bg-[#5865F2] shadow-sm = dark:shadow-rose-500 bg-blue-600 dark:bg-rose-600 pt-2 pb-2 w-max rounded-xl hover:scale-110 flex flex-row dark:hover:bg-rose-400  hover:bg-blue-400 ease-linear duration-300">
            <h1 className="text-white text-md font-semibold text-xs w-20">
              Read More
            </h1>
          </button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                {title}
              </h1>
              <p className = "text-sm italic text-slate-700 dark:text-slate-200">
                {readMore && readMore.map((p: any, i: number) => {
                  return (
                    <p key={i}>{p}</p>
                  );
                })}
              </p>
              <div className="shadow-md dark:shadow-none  w-full pt:10 md:w-2/3 lg:w-1/2 relative mb-8">
                {img && <Carousel images={img} />}
              </div>
              <div className="relative md:h-10  flex justify-around lg:w-[50%]">
            {stack &&
              stack.map((tech, i) => {
                return (
                  <Image
                    className="dark:stroke-white dark:stroke-1"
                    width="50px"
                    height="50px"
                    src={"/design_assets/icons/" + tech + ".svg"}
                    alt={tech + " logo"}
                    title={tech + " logo"}
                    key={i}
                  />
                );
              })}
          </div>
              <div className="flex flex-row r items-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="md:m-2 m-auto bg-[#5865F2] shadow-sm = dark:shadow-rose-500 bg-blue-600 dark:bg-rose-600 pt-2 pb-2 w-max rounded-xl hover:scale-110 flex flex-row dark:hover:bg-rose-400  hover:bg-blue-400 ease-linear duration-300">
                  <h1 className="text-white text-md font-semibold text-xs w-20">
                    Close
                  </h1>
                </button>
              </div>
            </div>

          </Modal>
          <div className="relative md:h-10  flex justify-around lg:w-[50%]">
            {stack &&
              stack.map((tech, i) => {
                return (
                  <Image
                    className="dark:stroke-white dark:stroke-1"
                    width="50px"
                    height="50px"
                    src={"/design_assets/icons/" + tech + ".svg"}
                    alt={tech + " logo"}
                    title={tech + " logo"}
                    key={i}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Project;