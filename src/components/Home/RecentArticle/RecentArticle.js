import React, { useEffect, useState } from 'react';
import RecentArticleShow from '../RecentArticleShow/RecentArticleShow';


const RecentArticle = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://blooming-stream-33970.herokuapp.com/blogCollectionShow')
            .then(res => res.json())
            .then(data => {
                setArticles(data);
            })
    }, [])


    return (
        <div class="w-full mt-5  p-1 pt-20 xl:pt-0 " id="testimonia">
            <div class="container mx-auto">
                <div class="text-center">
                    <h5 class="text-5xl  font-title font-semibold text-shark-900 ">Recent Articles</h5>

                </div>

                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {
                        articles.map(article => <RecentArticleShow article={article}></RecentArticleShow>)
                    }

                </div>  </div></div>
    );
};

export default RecentArticle;