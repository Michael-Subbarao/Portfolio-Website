
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
        <div className="absolute inset-0 flex flex-col justify-center items-center" >
          <div className="bg-white rounded-lg shadow-lg p-8 m-4 " >
            {children}
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    ) : null;
    
    if(isBrowser) {
      return ReactDom.createPortal(modalContent, document.body);
    }
}