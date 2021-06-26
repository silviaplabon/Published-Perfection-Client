import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../App'
import './AdminSidebar.css'

const AdminSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <>
        <div class="droppanel1">

        </div>
        <header class="font-header-font ">
            <div class="container bg-bing-900 text-white md:w-full lg:w-4/5 mx-auto border-t-4 border-b-4" >
                <div class="grid grid-cols-5  justify-center mt-2 mb-2 ">
                    <Link to="/" class="   text-base font-title md:text-2xl xl:text-4xl  text-end hover:text-green-500 border-r-2">Home</Link>
                    <Link to="/adminMaker" class="    font-title text-base  md:text-2xl xl:text-4xl   text-end hover:text-green-500  border-r-2">Admin Maker</Link>
                    <Link to="/adminBlogShow" class="    font-title text-base  md:text-2xl xl:text-4xl   text-end hover:text-green-500  border-r-2">Blogs</Link>
                    <Link to="/adminBlogPost" class="    font-title text-base  md:text-2xl xl:text-4xl   text-end hover:text-green-500  border-r-2">Add Blog</Link>

                    {loggedInUser.email ? <button onClick={() => setLoggedInUser({})} class="text-base   md:text-2xl  xl:text-4xl   font-title  text-end  hover:text-green-500  border-r-2 ">Logout</button> :
                        <Link to="/login" class="text-end text-base  md:text-2xl xl:text-4xl  font-title ">Login</Link>}
                </div>
              
            </div>

        </header >
        <div class="droppanel2"></div>
        </>
    )
}

export default AdminSidebar;
