import React from 'react';

const HeaderMain = () => {
    return (
        <div class="w-full p-1 mb-2" id="home">
            <div class="container mx-auto p-4 flex flex-wrap text-white sm:my-5 lg:my-16">
                <div class="w-full xl:w-1/2 xl:h-96 text-center xl:text-left mt-20">
                    <h2 class="font-bold  font-title text-shark-900  hover:text-blue-500 text-4xl xl:text-5xl xl:py-5 me-5 leading-normal mt-5">Publish your passions, your way</h2>
                    <p class="text-lg  text-2xl xl:text-2xl   text-shark-900  font-title hover:text-shark-500">Create a unique and beautiful blog. It’s easy and free</p>
                </div>
                <div class="w-full xl:w-1/2  ">
                    <img class="xl:absolute xl:right-0 w-full xl:w-1/2 rounded-lg xl:rounded-tl-full mt-10 xl:mt-0 border-4 border-black-900" src="https://i.ibb.co/3BVp21s/retro-image.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default HeaderMain;