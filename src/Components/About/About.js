import React,{useState} from 'react';
import './style.scss';
import aboutimg from '../../assets/dotimg.png';
import aboutlargeimg from '../../assets/aboutimg.png';
export const About = () => {
   
    return(
        <div className='about-container'>
            <div className='aboutimg-container'><img src={aboutimg} /></div>
            <div className='aboutcontent-container'>
                <h1>Virtual healthcare <br></br> for you</h1>
                <p>Trafalgar provides progressive, and affordable 
healthcare, accessible on mobile and online 
for everyone</p>
<button>Consult today</button>
            </div>
            <div className='aboutlargeimg-container'><img src={aboutlargeimg}/></div>
        </div>
    )
}