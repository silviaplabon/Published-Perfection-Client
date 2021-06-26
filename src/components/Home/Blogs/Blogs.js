import React, { useEffect, useState } from 'react';
import BlogsShow from '../BlogsShow/BlogsShow';

const Blogs = () => {

    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        fetch(' https://blooming-stream-33970.herokuapp.com/blogCollectionShow')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, [])
    console.log(blogs);


    return (
        <div class="w-full mt-5  p-1 pt-20 xl:pt-0" id="testimonia">
            <div class="container mx-auto">
                <div class="text-center">
                    <h5 class="text-5xl  font-title font-semibold text-shark-900 ">Blogs</h5>
              
                </div>
                <div class="flex flex-wrap xl:flex-nowrap justify-center">
                    
                    {
                        blogs.map(blog=><BlogsShow blog={blog}></BlogsShow>)
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default Blogs;