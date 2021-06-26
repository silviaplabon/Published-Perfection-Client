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
import AdminBlog from './components/Admin/AdminBlog/AdminBlog';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
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
          <PrivateRoute exact path="/testimonials">
            <Testimonials></Testimonials>
          </PrivateRoute>
          <PrivateRoute exact path="/adminBlogPost">
            <AddingBlog></AddingBlog>
          </PrivateRoute>


          <PrivateRoute exact path="/adminMaker">
            <AdminMaker></AdminMaker>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/adminBlogShow">
            <AdminBlog></AdminBlog>
          </PrivateRoute>


          <PrivateRoute exact path="/blog_detail_show/:id/:state">
            <BlogDetailShow></BlogDetailShow>
          </PrivateRoute>
          <PrivateRoute exact path="/footer">
            <Footer></Footer>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App
