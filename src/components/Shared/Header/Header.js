import React, { useContext, useEffect } from 'react'
import { Link as Link1} from 'react-router-dom'
import { UserContext } from '../../../App'
import './Header.css'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <>
        <div class="droppanel1">

        </div>
        <header class="font-header-font ">
            <div class="container headerStyle bg-bing-900 text-white md:w-3/5 mx-auto border-t-4 border-b-4" >
                <div class="grid grid-cols-5  justify-center mt-2 mb-2 ">
                    <Link to="/" class="   text-base font-title md:text-2xl xl:text-4xl  text-end hover:text-green-500 border-r-2">Home</Link>
                    <Link    activeClass="active" to="blogSection" spy={true} smooth={true} offset={50} duration={500}  class="    font-title text-base  md:text-2xl xl:text-4xl   text-end hover:text-green-500  border-r-2">Blogs</Link>
                    <Link to="/" class="  text-base  font-title  md:text-2xl xl:text-4xl text-end hover:text-green-500  border-r-2 ">
                    <img src="https://i.ibb.co/7tks09B/pp1-removebg-preview.png" class="content-center h-12 text-end mx-auto"></img>
                    </Link>
                    {loggedInUser.admin == true ? <Link1 to="/adminBlogPost" class="  font-title border-r-2  text-base  md:text-2xl xl:text-4xl text-end hover:text-green-500 ">Admin</Link1> : 
                    <Link  activeClass="active" to="featureSection" spy={true} smooth={true} offset={50} duration={500}   class=" text-base   md:text-2xl  xl:text-4xl   font-title  text-end  hover:text-green-500  border-r-2 pr-1">Feature</Link>}
                    {loggedInUser.email ? <button onClick={() => setLoggedInUser({})} class="text-base   md:text-2xl  xl:text-4xl   font-title  text-end  hover:text-green-500  border-r-2 ">Logout</button> :
                        <Link1 to="/login" class="text-end text-base  md:text-2xl xl:text-4xl  font-title ">Login</Link1>}
                </div>
              
            </div>

        </header >
        <div class="droppanel2"></div>
        </>
    )
}

export default Header
