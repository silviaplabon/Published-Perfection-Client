import React from 'react';

const Footer = () => {
    return (
        <nav id="footer" class="  border-dashed border-t-4  border-light-blue-500 bg-bing-500  bg-shark-900">
        <div class="container mx-auto pt-8  p-5">
            <div class="flex flex-wrap">
                <div class="w-1/5 overflow-hidden  pb-6">
                    <img style={{maxWidth: '70%',height:'auto'}} class="h-12 w-12" src="https://i.ibb.co/7tks09B/pp1-removebg-preview.png" alt="Logo"/>
                </div>
                <div class="w-4/5 grid grid-cols-3 md:grid-cols-3">
                <div class="w-full overflow-hidden ">
                    <h4 class="text-white    lg:text-2xl  md:text-sm text-xs font-bing-900 font-bold">Need Help</h4>
                    <ul class="nav navbar-nav">
                        <li id="navi-2" class="leading-7   text-sm">
                            <a class="text-white no-underline text-xs  md:text-sm " href="/page-1">
                                Service </a>
                        </li>
                        <li id="navi-1" class="leading-7   text-sm"><a class="text-white no-underline text-small md:text-sm text-xs" href="/page-2">Contact</a></li>
                    </ul>
                </div>
                <div class="w-full overflow-hidden ">
                    <h4 class="text-white   text-xs lg:text-2xl  md:text-sm font-bing-900 font-bold">About</h4>
                    <ul class="">
                    <li id="navi-2" class="leading-7   text-sm">
                        <a class="text-white no-underline text-xs no-underline " href="/page-1">
                            Contact Us</a>
                    </li>
                    <li id="navi-1" class="leading-7 text-xs  "><a class="text-white no-underline text-small" href="/page-2">Benefits</a></li>
                    </ul>
                </div>
                <div class="w-full overflow-hidden">
                    <h4 class="text-white   text-xs lg:text-2xl md:text-sm font-bing-900 font-bold">Visit Us</h4>
                    <ul class="">
                    <li id="navi-2" class="leading-7  text-sm">
                        <a class="text-white underline text-xs    md:text-sm no-underline" href="/page-1">
                            Getting Here</a>
                    </li>
                    <li id="navi-1" class="leading-7  text-xs md:text-sm  "><a class="text-white underline text-small no-underline" href="/page-2">FAQ's</a></li>
                    </ul>
                </div>
            </div>
            </div>
            <div class="pt-4 " style={{borderTop:'1px solid white'}}>
                <ul class=" flex flex-wrap xl:flex-nowrap justify-center">
                    <li class="md:mx-2 md:inline leading-7 text-sm mr-2" id="footer-navi-2"><a class="text-white underline text-small no-underline" href="/disclaimer">Disclaimer</a></li>
                    <li class="md:mx-2 md:inline leading-7 text-sm mr-2" id="footer-navi-2"><a class="text-white underline text-small no-underline" href="/cookie">Cookie policy</a></li>
                    <li class="md:mx-2 md:inline leading-7 text-sm mr-2" id="footer-navi-2"><a class="text-white underline text-small no-underline" href="/privacy">Privacy</a></li>
                    </ul>
                </div>

    
            </div>
    
    
    
    </nav>
    );
};

export default Footer;