import React from 'react';

const About = () => {
    return (
        <div class="w-full p-1" id="product">
            <div class="container mx-auto flex flex-wrap xl:flex:nowrap justify-center">
                <div class="w-full xl:w-1/2">
                    <img class="w-4/5 mx-auto xl:w-3/4 rounded-xl xl:h-4/5 " 
                    src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </div>
                <div class="w-4/5 mx-auto xl:w-1/2">
                    <h3 class="text-3xl xl:text-4xl font-bold xl:pt-1 leading-normal font-title">Read the perfect Blog</h3>
                    <p class="pt-5 leading-7 text-gray-500 font-bebas-300">Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.</p>
                    <div class="grid grid-cols-3  justify-center mt-2 mb-2 ">
                        <div class="">
                            <h3 class="text-2xl xl:text-3xl font-bold pt-2 leading-4">12</h3>
                            <p class="pt-5 leading-7 text-gray-500 ">Years Experience</p>
                        </div>
                        <div class="">
                            <h3 class="text-2xl xl:text-3xl  font-bold pt-2 leading-4">120</h3>
                            <p class="pt-5 leading-7 text-gray-500">Awards Gained</p>
                        </div>
                        <div class="">
                            <h3 class="text-2xl xl:text-3xl  font-bold pt-2 leading-4">900</h3>
                            <p class="pt-5 leading-7 text-gray-500 ">Blog Collection</p>
                        </div>
                    </div>
                    {/* <div class="text-2xl text-center lg:text-left">
                        <button class="bg-green-500 py-2 px-4 rounded-lg text-white">See More</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default About;