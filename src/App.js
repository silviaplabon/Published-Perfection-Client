import React, { createContext, useState } from 'react'
import Login from '../src/components/Login/Login/Login'
import Testimonials from './components/Home/Blogs/Blogs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Shared/Header/Header'
import Footer from './components/Shared/Footer/Footer'
import Home from './components/Home/Home/Home'
import AdminMaker from './components/Admin/AdminMaker/AdminMaker'
import UserIsAdmin from './components/Shared/UserIsAdmin/UserIsAdmin'
import AddingBlog from './components/Admin/AddingBlog/AddingBlog'
import BlogDetailShow from './components/Home/BlogDetailsShow/BlogDetailsShow'
export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Router>
         <UserIsAdmin></UserIsAdmin>
        <Switch> 
           <Route exact path="/">
            <Home></Home>
           </Route>
           <Route exact path="/testimonials">
             <Testimonials></Testimonials>
           </Route>
           <Route exact path="/adminBlogPost">
             <AddingBlog></AddingBlog>
           </Route>
           <Route exact path="/adminMaker">
             <AdminMaker></AdminMaker>
           </Route>
          <Route exact  path="/login">
            <Login></Login>
          </Route>
          <Route exact  path="/blog_detail_show/:id/:state">
          <BlogDetailShow></BlogDetailShow>
          </Route>
          <Route exact  path="/footer">
            <Footer></Footer>
          </Route>

          </Switch>
          </Router>
    </UserContext.Provider>
  )
}

export default App
