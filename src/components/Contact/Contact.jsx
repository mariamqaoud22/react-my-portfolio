import { FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

export default function Contact() {
  return <>
<div className="bg-bg text-text text-center py-20" id='contact'>
<div className="container mx-auto px-8 md:px-16 lg:px-24 ">
<h2 className="text-4xl font-bold text-center mb-12"> Contact Me</h2>
<div className="flex flex-col md:flex-row items-center md:space-x-12">
<div className='flex-1 text-left'> 
<h3>Let is Talk</h3>
<p>I am open to discussing web development projects or partnership opportunities.</p>
 
 <div className='mb-4 mt-6 '>
  <FaEnvelope className='inline-block text-secondary '></FaEnvelope>
  <a href="mailto:OgQDj@example.com" className="inline-block ml-2 text-text hover:text-secondary hover:underline">
    Mariamqaoud22@gmail.com
  </a>
</div>
 <div className='mb-4 '>
  <FaPhone className='inline-block text-secondary'></FaPhone>
 <span className="inline-block ml-2 text-text hover:text-secondary hover:underline"> +201128824917 </span>
</div>
 <div className='mb-4 '>
  <FaMapMarkedAlt className='inline-block text-secondary'></FaMapMarkedAlt>
 <span className="inline-block ml-2 text-text hover:text-secondary hover:underline">  cairo , Egypt </span>
</div>



  </div>  

<div className='flex-1 w-full '>

<form className='space-y-4'>
 <div>
 <label htmlFor="name" className='block mb-2'>Your Name</label>
 <input type="text" className='w-full p-2 rounded bg-bg3 border border-secondary focus:outline-none focus:border-primary 'placeholder='Enter You Name'/>
 </div>
              <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-bg3 border border-secondary focus:outline-none
                    focus:border-primary '
                    placeholder='Enter You Email'/>
              </div>
              <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-bg3 border border-secondary focus:outline-none
                    focus:border-primary '
                    rows="5"
                    placeholder='Enter You Message'/>
              </div>
              <button className='bg-gradient-to-r from-primary  to-secondary text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
          >Send</button>
          </form>

</div>
</div>
</div>
</div>
    
    </>
  
}
