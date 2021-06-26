import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import './RecentArticleShow.css'

const RecentArticleShow = ({ article }) => {
    const history = useHistory();
    const { _id, title, content, imageURL, date, name, image } = article;
    const maxLength = 120;
    let trimmedString = content.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    const handleDetailsShow = (blog) => {
        history.push(`/blog_detail_show/${article._id}/true`)
    }
    return (
        <div class="rounded overflow-hidden shadow-lg">
            <img class="h-64  imageGray w-full object-cover object-center border-4 border-black-900" src={imageURL} alt="image" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{title}</div>
                <p class="text-gray-700 text-base">
                    {trimmedString}.....
                </p>
            </div>
            <button class=" bg-shark-500 rounded mx-6 p-2 focus:bg-pink-700 text-white" onClick={() => handleDetailsShow(article)}>Read <span class="text-pink-dark" >More</span> 
             <FontAwesomeIcon icon={faArrowRight} /></button>

            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#blog</span>
            </div>
        </div>
    );
};

export default RecentArticleShow;