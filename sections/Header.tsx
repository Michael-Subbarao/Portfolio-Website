/* eslint-disable @next/next/no-img-element */
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link"
import Button from "../components/Button";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigations = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path:'/contact'}
  ];
  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark') {
      return (
        <Button className="bg-gray-300 dark:bg-gray-600 dark:float-right"
          onClick={() => setTheme('light')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </Button>
      )
    } else {
      return (
        <Button className="bg-gray-300 float-right"
          onClick={() => setTheme('dark')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      )
    }

  }

  return (
    <header className="h-16 items-center flex mb-4 z-[9999]" id = "modal-root">
      <div className = "fixed w-full dark:bg-slate-900 bg-slate-200">
      
      <div className="flex md:justify-center items-center gap-1 md:gap-4 pb-4 pt-4">
      <ul className= "flex gap-1 justify-center self-center ">
        {navigations.map(nav => (
          <Link href={nav.path} key={nav.label}><a
            className="font-semibold text-sm md:mr-4 md:text-lg lg:text-2xl hover:underline hover:text-slate-900 text-gray-600 dark:text-gray-400 dark:hover:text-gray-200 transition ease-in-out"
          >{nav.label}</a></Link>
        ))}
      </ul>
        <a href="https://www.linkedin.com/in/michael-subbarao/" target="_blank" rel="noopener noreferrer">
        <img
                    className="dark:stroke-white dark:stroke-1 h-10 w-10 hover:outline-2 hover:outline-white hover:-translate-y-1 active:translate-y-0"
                    src="/design_assets/icons/linkedin.svg"
                    alt="GitHub logo"
                    title="linkedIn logo"
                  />
        </a>
        <a className = "dark:bg-slate-300 dark-outline-slate-600 rounded-full hover:-translate-y-1 active:translate-y-0" href="https://github.com/Michael-Subbarao" target="_blank" rel="noopener noreferrer">
        <img
                    className="dark:stroke-1 h-10 w-10 "
                    src="/design_assets/icons/github.svg"
                    alt="GitHub logo"
                    title="GitHub logo"
                  />
        </a>
        {renderThemeChanger()}
      </div>
      </div>
    </header>
  )
}

export default Header