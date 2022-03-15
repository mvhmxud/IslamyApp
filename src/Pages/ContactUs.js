import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../components/Layout/navbar'
import {BsFacebook , BsGithub} from 'react-icons/bs'
import {IoIosMail} from 'react-icons/io'
import {FaGooglePlay} from 'react-icons/fa'
import img from '../images/contact.png'
function ContactUs(props) {
    const isArabic = useSelector((state)=> state.TranslationSLice.isArabic)
  return (
      <>
    <NavBar darkModeHandler={props.darkModeHandler} changeLanguageHandler={props.changeLanguageHandler} isDarkMode={props.isDarkMode}/>
    <div className='min-h-screen pt-10 bg-background dark:bg-darkmodeDark mt-0'>
    <div className='items-center bg-white mx-auto w-4/5 md:w-1/3 p-6 rounded-3xl shadow-sm text-center text-maingreen flex flex-col gap-2  text-2xl md:text-5xl  dark:bg-darkmodeLight '>
        <div className='md:w-72 w-52 '><img className='rtl:mr-4 -ml-4 ' src={img}/></div>
        {isArabic ? <span className='arabic'>تواصل معنا </span> : 'Contact us'}
        <div className='flex gap-4 justify-center text-2xl mt-4 text-darkgrey  dark:text-white items-center'>
            <a href='https://www.facebook.com/mahmoud.ashraf.44/' className='hover:text-maingreen hover:scale-[1.2] transition-all' target='_blank'><BsFacebook/></a>
            <a href='https://github.com/mvhmxud' className='hover:text-maingreen hover:scale-[1.2] transition-all' target='_blank'><BsGithub/></a>
            <a href='mailto:mvhmxud@gmail.com' className='hover:text-maingreen hover:scale-[1.2] transition-all'><IoIosMail className='text-3xl'/></a>
        </div>
        <div className='text-2xl text-darkgrey dark:text-white'>
           {isArabic ? <span className='arabic'>قريبا !</span> : "Soon!"}
        </div>
        <a href='#'>
            <FaGooglePlay className='text-2xl transition-all hover:text-darkgrey text-darkgrey dark:text-white  hover:scale-[1.2]'/>
        </a>
        
    </div>
    </div>
    </>
  )
}

export default ContactUs