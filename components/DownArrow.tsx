import React, { useEffect, useState } from "react";

const DownArrow = () => {
    const [visible, setVisible] = useState('');

    const listenToScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setVisible('hidden');
        } else {
            setVisible('');
        }
    };
    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, [])

    return (
        <div className = {visible}>
        <div className="fixed bottom-5 right-5 m-4 flex" >
        <svg className="animate-bounce w-24 h-24 md:h-48 md:w-48 lg:w-64 lg:h-64 dark:fill-white fixed"
        onClick = {(e)=>{window.scrollBy(0,document.documentElement.clientHeight)}}
         xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"></path>
         
        </svg>
        </div>
        </div>
    )
  }
  
  export default DownArrow;