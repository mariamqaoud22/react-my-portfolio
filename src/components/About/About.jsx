import AboutImage from '../../assets/unnamed.jpg'
export default function About() {
return <>

<div className="bg-bg text-text text-center py-20" id='about'>

<div className="container mx-auto px-8 md:px-16 lg:px-24 ">
    <h2 className="text-4xl font-bold text-center mb-12"> About Me</h2>
<div className="flex flex-col md:flex-row items-center md:space-x-12">
    <img src={AboutImage} alt='mariam' 
    className=" w-72 h-84 rounded object-cover mb-8 md:mb-0 " />
 <div className='flex-1  '>    
    <p className="text-lg mb-8">
As a React Developer,
I specialize in building modern and responsive web applications that prioritize user experience.
My passion lies in creating intuitive and user-friendly interfaces,
ensuring that every interaction is seamless and enjoyable.
I am committed to continuous learning,
constantly adapting to new technologies to enhance my skills and stay ahead in this ever-evolving field.
I am always on the lookout for exciting projects that challenge me and allow me to contribute my expertise.
If you have any questions or would like to collaborate,
please don’t hesitate to reach out.
Thank you for visiting my portfolio!
</p>
<div className='space-y-4'>
<div className='flex items-center'>
<label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS </label>
<div className='grow bg-text rounded-full h-2.5'>
<div className="bg-gradient-to-r from-secondary to-primary h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12">
</div>
</div>
</div>
<div className='flex items-center'>
<label htmlFor="htmlandcss" className='w-2/12'> React JS </label>
<div className='grow bg-text rounded-full h-2.5'>
<div className="bg-gradient-to-r from-secondary to-primary h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12">
</div>
</div>
</div>
<div className='flex items-center'>
<label htmlFor="htmlandcss" className='w-2/12'> TS </label>
<div className='grow bg-text rounded-full h-2.5'>
<div className="bg-gradient-to-r from-secondary to-primary h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12">
</div>
</div>
</div>
</div>




                <div className="mt-12 flex justify-between text-center">
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'> 1+ </h3>
                        <p className='text-text'> Years of Experience </p> 
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'> 1+ </h3>
                        <p className='text-text'> Projects completed </p> 
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'> 1+ </h3>
                        <p className='text-text'> Happy Clients </p> 
                    </div>
                </div>






</div>
</div>
</div>
</div>
</> 
}

