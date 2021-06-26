import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';
import AdminBlogShow from '../AdminBlogShow/AdminBlogShow'

const AdminBlog = () => {

    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        fetch(' https://blooming-stream-33970.herokuapp.com/blogCollectionShow')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, [])
   


    return (


        <div class=" ">
        <div class="w-full mb-3">
        <div class=" text-white  ">
          <AdminSidebar></AdminSidebar>
        </div>
        <div class=" text-white col-span-2 mt-5 " >
        <div class="w-full mt-5  p-1 pt-20 xl:pt-0 border-dashed border-b-4 border-light-blue-500" id="blogSection">
            <div class="container mx-auto">
                <div class="text-center">
                    <h5 class="text-5xl  font-title font-semibold text-shark-900 ">Blogs</h5>
                </div>
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                    {
                        blogs.map(blog=><AdminBlogShow blog={blog}></AdminBlogShow>)
                    }
                </div>
            </div>
        </div>
        </div>
        </div></div>
    );
};

export default AdminBlog;