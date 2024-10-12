import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return <>
   <footer className="bg-bg text-text py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2"> Mariam </h3>
            <p className="text-text">
              I am a React Developer based in the Egypt , specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-bg border border-primary
                focus:outline-none focus:border-secondary"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary text-text px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-text pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-text">
            &copy; {new Date().getFullYear()} Mariam Qaoud  . All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-secondary hover:text-primary">
              <FaFacebook />
            </a>
            
            <a href="#http://www.linkedin.com/in/mariam-qaoud-20m12m" className="text-secondary hover:text-primary">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/+201128824917" className="text-secondary hover:text-primary">
              <FaWhatsapp />
            </a>
            <a href="#https://github.com/mariamqaoud22" className="text-secondary hover:text-primary">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-secondary hover:text-primary">
              Privacy
            </a>
            <a href="#" className="text-secondary hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  
  
  
  </>
}
