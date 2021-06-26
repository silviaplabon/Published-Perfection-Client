import React from 'react';

const Service = () => {
    return (
        <div class="w-full p-1 border-dashed border-b-4 border-light-blue-500" id="featureSection">
        <div class="text-center py-5 xl:pt-20 xl:pb-8">
            <h5 class="text-2xl text-green-500 font-header">-What We Serve-</h5>
            <h3 class="text-5xl font-bold pt-5 pb-10 font-title">Benefits & Feature</h3>
            <div class="container mx-auto flex flex-wrap lg:flex-nowrap justify-center">
                <div class="w-full lg:w-1/2 xl:w-1/3 border-shark-900   text-shark-900   border-2 text-white my-5 mx-8 p-8 rounded-2xl">
                    <div class="bg-fantasy-700 p-5 inline-block rounded-full my-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                        <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <h5 class="text-2xl font-semibold py-3">Recent Posts</h5>
                    <p class="text-sm">By displaying Recent Posts we help our users easily discover new content and spend more time on our site. </p>
                </div>
                <div class="w-full lg:w-1/2 xl:w-1/3 border-shark-900   border-2   text-shark-900  my-5 mx-8 p-8 rounded-2xl">
                    <div class=" bg-fantasy-700 p-5 inline-block rounded-full my-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </div>
                    <h5 class="text-2xl font-semibold py-3">Smoothness</h5>
                    <p class="text-sm">We provide  the  whole process as easy and smooth, smooth browsing  of blogs to a user and best sharing experience </p>
                </div>
                <div class="w-full lg:w-1/2 xl:w-1/3 border-shark-900   border-2  text-shark-900 my-5 mx-8 p-8 rounded-2xl">
                    <div class="bg-fantasy-700 p-5 inline-block rounded-full my-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h5 class="text-2xl font-semibold py-3">Customer Support</h5>
                    <p class="text-sm">The sole purpose of the customer service is to meet the expectations of the customers so that they are satisfied with the outcome. 
                  </p>
                </div>
            </div>
        </div>
    </div> 
    );
};

export default Service;