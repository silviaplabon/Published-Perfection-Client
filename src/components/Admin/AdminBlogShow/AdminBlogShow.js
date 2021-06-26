import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminBlogShow = ({ blog }) => {
    const history = useHistory();
    const { _id, title, content, imageURL, date, name, image } = blog;
    const maxLength = 140;
    let trimmedString = content.substr(0, maxLength);
    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))


    const handleDelete = (_id) => {
        fetch(`https://blooming-stream-33970.herokuapp.com/deleteSingleBlog/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    //   event.target.parentNode.style.display="none"
                    alert('Succesfully  deleted !')
                    history.push('/')
                }
            })
    }

 

    return (
        <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full  h-64  w-full object-cover object-center border-4 border-black-900" src={imageURL} alt="img" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-shark-900">{title}</div>
                <p class="text-gray-700 text-base">
                    {trimmedString}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2 flex flex-wrap justify-between content-center">
               <h5 class="text-shark-900">{name}</h5>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleDelete(_id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default AdminBlogShow;