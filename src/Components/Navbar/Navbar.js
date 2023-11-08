import React,{useState,useRef} from 'react';
import './style.scss';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
export const Navbar = () => {
    const ref = useRef();
    const handleToggle = () => {
        ref.current.classList.toggle('responive-nav')
    }
    const navbartitle = ['Home','Find a doctor','Apps','Testimonials','About us']
    const navbarroutes = ['/home','/findadoctor','/apps','/testimonials','aboutus']
    return(
        <div className = 'navbar-container'>
            <div className='logo-container'>
                <img src={logo} alt='logo' />
            </div>
           
            <div className='menu-container' ref={ref}>
                <ul className='menu-list'>
                
                {
                    navbartitle.map((item,index)=>(
                        <li key={index}>
                        <Link to={navbarroutes[index]}>{item}</Link>
                        </li>
                    ))
                }
                
                </ul>
                <button className='menu-btn' onClick={handleToggle}>{'\u2630'}</button>
            </div>
            
        </div>
    )
}