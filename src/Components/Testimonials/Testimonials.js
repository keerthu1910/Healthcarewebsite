import React from 'react';
import './style.scss';
import testimonialsbgelement from '../../assets/testimonialsbgelement.png';
import dotimg from '../../assets/dotimg.png';
export const Testimonials = () => {
    const data = [
        {
            'photo':'',
            'username':'Edward Newgate',
            'location':'Founder circle',
            'review':'“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'
        },
        {
            'photo':'',
            'username':'Edward Newgate',
            'location':'Founder circle',
            'review':'“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'
        },
    ]
    return(
        <div className='container'>
            <img src={testimonialsbgelement}/>
            <div className='testimonials-container'>
                <div className='heading'>
                <img src={dotimg}/>
                    <p>What our customer are saying</p>
                    <div className='rectangle'></div>
                   
                </div>
                <div className='testimonials-content'>

                </div>
            </div>
        </div>
    )
}