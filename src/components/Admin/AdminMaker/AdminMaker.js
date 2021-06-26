import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import AdminSidebar from '../../Shared/AdminSidebar/AdminSidebar';




const AdminMaker = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = data => {
    const adminData = {
      email: data.email,
    };
    const url = ` https://blooming-stream-33970.herokuapp.com/newAdminMaker`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(adminData)
    })
      .then(res => alert('Admin Entered Successfully'))
  };


  return (

    <div class=" ">

      <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
      <div class=" text-white  ">
        <AdminSidebar></AdminSidebar>
      </div>
      <div class=" text-white col-span-2  mt-20">

        <form onSubmit={handleSubmit(onSubmit)} className=" p-4 formStyle border-rounded justify-center w-full " style={{ backgroundColor: '#212529', width: '88%', margin: 'auto', borderRadius: '0.70rem' }}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide  font-oldFont  text-white text-xs font-bold mb-2 text-white" for="grid-password">
                Email
              </label>
              <input name="email" type="email"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 focus:ring-2 focus:ring-shark-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"
                placeholder="Email" defaultValue="" ref={register} />
              <button type="submit" class="font-oldFont bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Submit
              </button>

              {/* <input type="submit" className="mt-3 btn btn-primary" value="Save"/> */}
            </div>
          </div>
        </form>
      </div>

    </div>
      </div >



      );
};

export default AdminMaker;