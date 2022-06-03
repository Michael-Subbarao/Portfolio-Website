import emailJs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      emailJs.sendForm('service_gz2rdem', 'template_ztc1efk', e.target, 'FRSf_g35L7tSkmjmH')
      .then(res => {
        setResult('Message sent successfully')
      }
      )
      .catch(err => {
        setResult('Something went wrong sending your message, please try again')
      }
      )
      e.target.reset();
      setTimeout(()=>{},3000);
      setResult('');
    }
  return (  
  <div className="p-6 md:mx-48 text-slate-700 font-semibold dark:text-slate-400">
    {result && <p className="text-sm text-gray-600 dark:text-slate-50 mt-4 mb-4 md:mb-8">{result}</p>}
    <h1 className="ml-1  text-7xl font-bold transition ease-in-out">Contact <span className="text-blue-600 dark:text-rose-600 transition ease-in-out">Me</span></h1>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName">First name<span className="text-red-400">*</span></label>
          <input type="text" id="first-name" name="firstName" className="form-input px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last name<span className="text-red-400">*</span></label>
          <input type="text" id="last-name" name="lastName" className="form-input px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email<span className="text-red-400">*</span></label>
          <input type="email" id="email" name="email" className="form-input px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">
            <div className="flex align-items">
              Phone
              <span className="ml-auto opacity-75">Optional</span>
            </div>
          </label>
          <input type="tel" id="phone" name="phone" className="form-input px-3 py-2 rounded-md" />
        </div>
        <div className="flex flex-col col-span-2">
          <label htmlFor="subject">Subject<span className="text-red-400">*</span></label>
          <input type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col col-span-2">
          <label htmlFor="subject">
            <div className="flex align-items">
              Message<span className="text-red-400">*</span>
              <span className="ml-auto opacity-75">Max. 1000 characters</span>
            </div>
          </label>
          <textarea maxLength={1000} rows={4} id="subject" name="subject" className="form-input px-3 py-2 rounded-md" required />
        </div>
      </div>
      <div className="flex justify-end py-4">
        <button type="submit"  className="bg-rose-600 text-slate-800 dark:bg-rose-600 text-slate-200 px-6 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:ring-2 hover:ring-gray-300 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500">
          Submit
        </button>
      </div>
    </form>
  </div>
);
  }

export default Contact;
