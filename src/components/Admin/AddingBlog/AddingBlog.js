import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faBars } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';

const AddingBlog = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [imageURL, setImageURL] = useState(null);
    console.log(watch("example")); // watch input value by passing the name of it
    const onSubmit = data => {
        const productData = {
            title: data.title,
            content: data.content,
            imageURL: imageURL,
            date:new Date().toDateString(),
            name:loggedInUser.displayName,
            image:loggedInUser.photo
        };
        console.log(loggedInUser)
        console.log(productData,"silvia")
        const url = ` https://blooming-stream-33970.herokuapp.com/adding_a_blog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {console.log('server side response', res); alert('welcome')})
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b9c8c292069e10110cf7af6edcbd15eb');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div class=" ">

        <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
        <div class=" text-white  ">
          <AdminSidebar></AdminSidebar>
        </div>
        <div class=" text-white col-span-2  mt-20">

            <form onSubmit={handleSubmit(onSubmit)} className=" justify-center w-4/5 mx-auto ">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Title</label>
                        <input name="title" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" placeholder="Jane" defaultValue="" ref={register} />
                    </div>

                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Content
                        </label>
                        <textarea name="content" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded  py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" defaultValue="" ref={register}></textarea>
                    </div>
                    
                   
                </div>
                {/* first name and last name */}
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Cover Image
                        </label>
                        <input name="imageURL"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password" type="file" onChange={handleImageUpload} ref={register({ required: true })} placeholder="" />

                    </div>
                </div>
                <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Submit
                </button>



            </form>
        </div>
        </div></div>
    );
};

export default AddingBlog;

