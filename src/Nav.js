import React from "react";
import {Link} from 'react-router-dom';

function nav (){
    return(
        <div>
        <Link to='/'>Home</Link><br/>
        <Link to='/about'>About US</Link><br/>
        <Link to='/blog'>Blog</Link><br/>
        <Link to='/contact'>Contact US</Link><br/>
        </div>
    )
}

export default nav;