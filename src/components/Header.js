import React from 'react'
import "./header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import  SearchIcon from '@material-ui/icons/Search';
import {NavLink } from "react-router-dom";


const Header = () => {
    
    const menu_handle = ()=>{
        document.querySelector(".img").classList.toggle("active");
        document.querySelector(".nav").classList.toggle("active");
    }
    
    return (
        <div className="headerWrapper">
            <div className="header-title">
                <h1><span className="black">T</span>he</h1>
                <h1><span className="black">E</span>ntrepreneurship</h1>
                <h1><span className="black">N</span>etwork</h1>
            </div>
            <div className="logo">
                <img src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_100,h_80,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp" alt="logo"></img>
            </div>
            <div className="btns">
                <button className="cart-btn "><ShoppingCartOutlinedIcon/></button>
                <button className="login-btn"><AccountCircleIcon className="user_icon"/> Log In</button>
            </div>
            <div className="search_bar">
                <input type="text" placeholder="Search here..."></input>
                <SearchIcon className="searchicon"/>
            </div>
            <div className="nav">
                <ul>
                    <li className="borderRight"><NavLink exact activeClassName="active_link" className="link" to="/">Home</NavLink></li>
                    <li className="borderRight"><NavLink exact activeClassName="active_link" className="link" to="/courses">Online Courses</NavLink></li>
                    <li className="borderRight"><NavLink exact activeClassName="active_link" className="link" to="/hiring">We're Hiring</NavLink></li>
                    <li className="link more">More
                        <ul className="menu">
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/hiring">Blog</NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Certification</NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Alumni Team</NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Forum</NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Hackathon</NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Membership Registration</NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Campus Ambassador Program </NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Mentorship</NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Social Media</NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Testimonials</NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Contact Us</NavLink></li>
                            <li><NavLink exact activeClassName="active_link" className="menu_link " to="/">Complaints</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="bar_menu" onClick={menu_handle}>
               <div className="img"></div>
            </div>
            
        </div>
        
    )
}

export default Header
