import React from 'react';
import Header from '../../Shared/Header/Header';
import Blogs from '../Blogs/Blogs';

import Service from '../Service/Service';
import Footer from '../../Shared/Footer/Footer';
import AddingBlog from '../../Admin/AddingBlog/AddingBlog';
import HeaderMain from '../HeaderMain/HeaderMain';
import About from '../About/About';
import RecentArticle from '../RecentArticle/RecentArticle';




const Home = () => {
    return (
        <>
        <Header></Header>
        <HeaderMain></HeaderMain>
        <Service></Service>
        <About></About>
        <Blogs></Blogs>
        <RecentArticle></RecentArticle>
        <Footer></Footer>
        </>
    );
};

export default Home;