import image0E from '../../assets/63075a5aa7a2f7b6d9ceb626_Innovative E-Commerce Website Design Ideas.jpg'
const projects = [
  {
    id: 1,
    name: "E-Commerce",
    technologies: "React, Js , Css, Html",
    image : image0E, 
    github: "#",
  },
  {
    id: 2,
    name: "",
    technologies: "",
    image:image0E ,
    github: "#",
  },
  {
    id: 3,
    name: "",
    technologies: '',
    image: image0E ,
    github: "#",
  },
];










export default function Projects() {
  return <>
    <div className="bg-bg text-text text-center py-20" id='projects'>
  <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
    <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project) => (
            <div key={project.id} className="bg-bg2 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-text mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-primary to-secondary text-text px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>

          ))}
    </div>
    </div>
    </div>
  </>
}
