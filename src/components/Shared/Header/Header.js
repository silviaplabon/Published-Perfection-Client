import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../App'
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    return (
        <>
        <div class="droppanel1">

        </div>
        <header class="font-header-font ">
            <div class="container bg-bing-900 text-white md:w-3/5 mx-auto border-t-4 border-b-4" >
                <div class="grid grid-cols-5  justify-center mt-2 mb-2 ">
                    <Link to="/" class="   text-2xl xl:text-4xl  text-end hover:text-green-500 border-r-2">Home</Link>
                    <Link to="/" class="  text-2xl xl:text-4xl    text-end hover:text-green-500  border-r-2">Blogs</Link>
                    <Link to="/" class="  text-2xl xl:text-4xl    text-end hover:text-green-500  border-r-2 ">
                    <img src="https://i.ibb.co/7tks09B/pp1-removebg-preview.png" class="content-center h-12 text-end mx-auto"></img>
                    </Link>
                    {loggedInUser.admin == true ? <Link to="/adminBlogPost" class=" border-r-2   text-2xl xl:text-4xl  text-end hover:text-green-500 ">Admin</Link> : <Link to="/" class="  text-2xl xl:text-4xl   text-end  hover:text-green-500  border-r-2">Contact</Link>}
                    {loggedInUser.email ? <button onClick={() => setLoggedInUser({})} class=" text-end text-2xl xl:text-4xl  ">Logout</button> :
                        <Link to="/login" class="text-end  text-2xl xl:text-4xl  ">Login</Link>}
                </div>
              
            </div>

        </header >
        <div class="droppanel2"></div>
        </>
    )
}

export default Header
