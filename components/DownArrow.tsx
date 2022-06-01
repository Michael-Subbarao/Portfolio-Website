const downArrow = () => {
    return (
        <div className="fixed bottom-5 right-5 m-4" onClick = {(e)=>{window.scrollBy(0, 750)}}>
        <svg className="animate-bounce w-24 h-24 md:h-48 md:w-48 lg:w-64 lg:h-64 dark:fill-white fixed"
         xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"></path>
        </svg>
        </div>
    )
  }
  
  export default downArrow;