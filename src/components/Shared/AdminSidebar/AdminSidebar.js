import React, { useContext } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './AdminSidebar.css'

const AdminSidebar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    
    return (
       
        <ProSidebar className="w-full proSidebar" >
            <Menu iconShape="square">
                <MenuItem className="pt-5 text-center"> Home <Link to="/" /></MenuItem>
                <MenuItem className="pt-3 text-center "> Admin Maker<Link to="/adminMaker" /></MenuItem>
                <MenuItem className="pt-5 text-center"> ADD A Blog<Link to="/adminBlogPost" /></MenuItem>
                <MenuItem className="pt-5 text-center"> Blog <Link to="/adminBlogShow" /></MenuItem>
                <MenuItem className="pt-5 text-center" onClick={() => setLoggedInUser({})} >
             
                {loggedInUser.email ? <button onClick={() => setLoggedInUser({})} className="btn buttonColor text-white logStyle  buttonStyleHeader ms-1">Logout</button> :
                                <div class="my-auto"> <Link to="/login" class="bg-red-500 py-2  px-4 rounded-lg text-white focus:outline-none text-white">Login</Link></div>
                            }
                </MenuItem>   
            </Menu>
        </ProSidebar>
    );
};

export default AdminSidebar;