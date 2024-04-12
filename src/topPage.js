import React from 'react';
import './App.css';

function HomeCard (){
    return(
        <div className='my-home-card container-fluid p-5'>
            <div className='text-center p-2'>
                <h1 className='text-light m-5 p-2'>
                    Portfolio
                </h1>
                <p className='mt-5 mb-0 text-light text-break'>
                    Take a look around my website and you'll find out who I am, what I do, and how to contact me.I'm excited to have you here!</p>
                <button className='mt-5'>
                    Read more
                </button>
            </div>
        </div>
    );
}

export default HomeCard;