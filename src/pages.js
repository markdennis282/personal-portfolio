import React, {useState} from "react";
import './App.css';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import html from './html.png';
import c from './c.png';
import javascript from './javascript.png';
import react from './react.png';
import github from './github.png';
import vhdl from './vhdl.png';
import java from './java.png';
import scrollElement from "react-scroll/modules/mixins/scroll-element";


export function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Mark, nice to meet you. Please take a look around.</p>
              </div>
              <div>
                <p>I am a driven computer science student with a passion for technology and a strong foundation in programming
                   languages such as Java, C and HTML. My analytical and problem-solving skills, have enabled me to quickly understand
                    and adapt to new technologies. I am a hard worker and always strive to improve my skills and knowledge.
                     I am seeking an internship or entry-level position in the tech industry to apply my skills and gain valuable industry experience.</p>  
              </div>
            </div>
        </div>
      </div>
    )
} 
export function Contact(){
    return(
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/7ce661d0-1c55-4339-a582-8721a8481677" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - dennisma@tcd.ie</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>

    )
}



export function Home(){
  const handleClick = () => {
  const start = window.pageYOffset;
  const end = 4000;
  const duration = 250;
  const difference = end - start;
  const perTick = difference / duration * 10;

  const scroll = currentY => {
    window.scrollTo(0, currentY);
    if (currentY <= end) {
      window.requestAnimationFrame(() => {
        scroll(currentY + perTick);
      });
    }
  };
  window.requestAnimationFrame(() => {
    scroll(start);
  });
};
    return(
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Mark Dennis
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Computer Science Student.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a computer science student in Trinity College, I am always eager to learn and grow as a developer and I hope to use this platform to showcase my progress, connect with industry professionals, and explore new opportunities. Please take a look around.
          </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'smooth={true} duration={500} onClick={handleClick} >
              Contact Me
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-4 ' />

                <Link  to='contact' smooth={true} duration={500}>
              
            </Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    )
}

export function Navbar(){
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-pink-600 text-gray-300'>
        <p className=' font-bold text-4xl text-[#fff827]'>Mark Dennis</p>  
  
        {/* menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='experience' smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
  
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 '>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
  
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          }
        >
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
  
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/mark-dennis-3056ba261/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href="mailto:dennisma@tcd.ie/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href="https://docs.google.com/document/d/1Qo-ghMn213P28QB0bL2ev5DFKFMXkKGEeZLyeQ6RGIo/"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}
export function Skills(){
  return(
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'> These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={c} alt="HTML icon" />
                  <p className='my-4'>C</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={javascript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={react} alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={vhdl} alt="HTML icon" />
                  <p className='my-4'>VHDL</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export function Experience(){
  return(
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
              <p className='py-4 text-2xl font-bold '> Customer Service Advisor</p>
              <p className= ' text-1xl font-bold'>AIB</p>
              <p className=''>Primarily worked on the floor resolving customer queries relating to online banking. Completed numerous openings for personal and business accounts, in a timely and efficient manner. </p>
              <p className= 'text-4xl font-bold'>---------------------------------------------</p>

              <p className='' >I am interested in an entry-level position. I know I have much to learn, and I’m looking for an opportunity that will allow me to build a solid professional foundation.
</p>

        
          </div>

  
      </div>
    </div>
  )
}