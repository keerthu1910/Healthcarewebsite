import React,{useState} from 'react';
import './style.scss';
import testimonialsbgelement from '../../assets/testimonialsbgelement.png';
import dotimg from '../../assets/dotimg.png';
import testimonialimg from '../../assets/testimonilaimg.png';

export const Testimonials = () => {
    const [page,setPage] = useState(0);
    const data = [
        {
            'id':1,
            'photo':`${testimonialimg}`,
            'username':'Edward Newgate',
            'location':'Founder circle',
            'review':'“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'
        },
        {
            'id':2,
            'photo':`${testimonialimg}`,
            'username':'Snow white',
            'location':'Founder circle',
            'review':'“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'
        },
        {
            'id':3,
            'photo':`${testimonialimg}`,
            'username':'Oswald',
            'location':'Founder circle',
            'review':'“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'
        },
        {
            'id':4,
            'photo':`${testimonialimg}`,
            'username':'Hunter',
            'location':'Founder circle',
            'review':'“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'
        },
    ]
    return(
        <>
        <div className='container'>
            <img className='bgimg' src={testimonialsbgelement}/>
            <div className='testimonials-container'>
                <div className='heading'>
                    {/* <img className='container-img' src={dotimg}/> */}
                    
                        <p>What our customer are saying</p>
                        <div className='rectangle'></div>
                    
                    {
                        data?data.slice(page,page+1).map((item,index)=>(
                            <div className='testimonials-content' key={item.id}>
                                <div className='img-container'>
                                    <div>
                                        <img src={item.photo}/>
                                    </div>
                                    
                                    <div className='name-container'>
                                        <p className='username'>{item.username}</p>
                                        <p className='location'>{item.location}</p>
                                    </div>
                                </div>
                                <div className='review'>
                                    <p>{item.review}</p>
                                </div>
                               
                            </div>
                        )):<></>
                    }
           
                
                   </div>
                    
                </div>
               
               
            </div>
             <div className='carousel-container'>
             <div className={page === 0 ?'end':'left-arrow'}><h1 onClick={()=>{page!==0 ? setPage(page-1) : setPage(0)}}>{'\u2190'}</h1></div>
             {
                 data?[...Array(data.length)].map((_,index)=>{
                     return(
                         <div className={page===index ?'sphere' : 'hide'} key={index} onClick={()=>setPage(index)}></div>
                     )
                 }):<></>
             }
             <div className={page === data.length-1 ? 'end-right':'right-arrow'} onClick={()=>{page!== data.length-1 ? setPage(page+1) : setPage(data.length-1)}}><h1>{'\u2192'}</h1></div>
          </div>
          </>
    )
}