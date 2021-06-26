import React from 'react';
import './BlogsShow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const BlogsShow = ({ blog }) => {
    const history = useHistory();
    const { _id, title, content, imageURL, date, name,image } = blog;
    const  maxLength = 140;
    let   trimmedString = content.substr(0, maxLength);
    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    const handleDetailsShow = (blog) => {
        history.push(`/blog_detail_show/${blog._id}/false`)
    }

    return (
        <div class="w-full xl:w-1/2   my-5 mx-8  rounded-2xl border-t-2 border-black-900 ">
            <img src={imageURL} class=" imageTestimonial h-64  w-full object-cover object-center border-4 border-black-900" />
            <div class="flex  mt-5 items-center">
                <div class="w-1/3 sm:w-1/6">
                    <img src={image} class="rounded-full h-14 w-14"/>
                </div>
                <div class="w-2/3 sm:w-5/6">
                    <h5 class="px-5  text-black-600 text-lg font-semibold">{name}</h5>
                    <p class="px-5  text-black-900 ">{date}</p>
                </div>
            </div>
            <h6 class="text-2xl font-semibold py-1 font-tilte text-black-900 leading-10">{title}</h6>
            <p>{trimmedString}.....</p> 
            <button class=" font-oldFont bg-white-500 rounded p-2 mt-4 focus:bg-pink-700  text-shark-900 text-white"  onClick={() => handleDetailsShow(blog)}>Read <span class="text-pink-dark" >More</span>  <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default BlogsShow;