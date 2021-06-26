import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Blogs from '../Blogs/Blogs';
import RecentArticle from '../RecentArticle/RecentArticle';
import './BlogDetailShow.css'

const BlogDetailsShow = () => {
    const [blog, setBlog] = useState([]);
    
    const { id } = useParams();
    const { state } = useParams();
    useEffect(() => {
        fetch(`https://blooming-stream-33970.herokuapp.com/find_single_blog/${id}`)
        .then(res => res.json())
        .then(data => {
            setBlog(data);
        })
    }, [id])
    
    const { _id, title, content, imageURL, date, name, image } = blog;

    return (
        <>
        <Header></Header>
            <div class="container mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  mt-5 p-2 ">
                    <div class="w-7/10 lg:max-w-7/10 lg:flex mx-auto border-4  border-light-blue-500   border-solid md:border-dotted ">
                        <div class="lg:w-3/6 lg:h-auto   rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="blog">
                            <img src={imageURL} class="h-full w-full" />
                        </div>
                        <div class="lg:w-3/6  border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                                <div class="text-gray-900 font-bold text-xl mb-2">{title}</div>
                                <p class="text-gray-700 text-base">{content}</p>
                            </div>
                            <div class="flex items-center">
                                <div class="w-14 h-14 rounded-full ">

                                    <img class="w-13 h-13 rounded-full" src={image} alt="Writer" />
                                </div>
                                <div class="text-sm">
                                    <p class="text-gray-900 leading-none">{name}</p>
                                    <p class="text-gray-600">{date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto mt-10">
                    <p className="text-center font-bebas"> You may check Recent Activity</p>
                    </div>
            
            {
                state==false? <RecentArticle></RecentArticle>:<Blogs></Blogs>

            }

            </div>
        </>
    );
};

export default BlogDetailsShow;