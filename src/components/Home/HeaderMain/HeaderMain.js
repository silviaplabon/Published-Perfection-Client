import React from 'react';

const HeaderMain = () => {
    return (
        <div class="w-full p-1 mb-2 border-dashed border-b-4 border-light-blue-500 bg-bing-500" id="home">
            <div class="container mx-auto p-4 flex flex-wrap text-white my-2 lg:my-10 ">

                <div class="w-full lg:w-1/2 xl:h-96 text-center xl:text-left mt-20">
                    <h2 class="font-bold  font-title text-white  hover:text-blue-500 text-4xl xl:text-5xl xl:py-5 me-5 leading-normal mt-5">Publish your passions, your way</h2>
                    <p class="text-lg  text-2xl xl:text-2xl   text-white  font-title hover:text-shark-500">Create a unique and beautiful blog. It’s easy and free</p>
                </div>
                <div class="w-full lg:w-1/2  mt-3">
                    <div class="flex justify-center content-center">
                        <img class="border-8 border-shark-900" src="https://i.ibb.co/3BVp21s/retro-image.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeaderMain;