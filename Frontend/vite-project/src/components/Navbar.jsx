import React from "react";
import { Link } from "react-router-dom";

const Navbar  = () => {
    return(
        <>
        <div className="navbar">
            <Link to = {"/"} className="left">
                <h2>MERN - Blog Application</h2>
            </Link>
            <div className="right">
            
            <Link to={'/login'} className="items"><h3>Login</h3></Link>
            <Link to={'/register'} className="items"><h3>Register</h3></Link>
            <Link to={'/addblog'} className="items"><h3>AddBlog</h3></Link>
            <Link to={'/profile'} className="items"><h3>Profile</h3></Link>
            <div className="items"><h3>Logout</h3></div>
            </div>
        </div>
        </>
    )
}

export default Navbar;