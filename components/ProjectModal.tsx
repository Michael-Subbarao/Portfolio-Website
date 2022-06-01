
import {useState,useEffect} from 'react'
import ReactDom from 'react-dom'


export default function Modal({ open, children, onClose }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);}
    ,[]);
  
    const modalContent = open ? (
      <div className="fixed inset-0 z-50 overflow-auto">
        <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={onClose}></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center pt-48 md:pt-0" >
          <div className="bg-slate-50 dark:bg-gray-200 rounded-lg shadow-lg p-8 m-4 lg:w-[60%]" >
            {children}
          </div>
        </div>
      </div>
    ) : null;
    
    if(isBrowser) {
      return ReactDom.createPortal(modalContent, document.body);
    }
}