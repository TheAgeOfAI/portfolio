import React from 'react';
import './App.css';
import {Card, VerCard} from './Cards';
import data from './info.json';

const InfoCard = () => {

    return (
        <div className='container-fluid p-5'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-4 text-center'>
                    <div className='flex-item'>
                        <h3>
                            Get to know me
                        </h3>
                    </div>
                </div>
                <Card
                    info={data[0]}
                />
            </div>
        </div>
    );
}

const VerInfoCard = () => {
    
    return (
        <div className='container-fluid p-5 bg-primary'>
            <div className='row justify-content-between align-items-center'>
                <div className='row p-3 m-2 ms-5'>
                    <h3>
                        What makes me different ?
                    </h3>
                </div>
                <VerCard
                    info={data[1]}
                />
            </div>
            <hr />
        </div>
    )
}

const EndCredits = () => {
    
    return (
        <div className='container-fluid bg-secondary py-5'>
            <div className='row justify-content-center align-items-center text-center my-5 py-5'>
                <div className='p-3'>
                    <h2>
                        HIRE ME
                    </h2>
                    <p>
                        Need the right skills and experience to take your project to the next level? Let’s talk!
                    </p>
                </div>
            </div>
            <div className='row justify-content-center align-items-start text-center my-5 py-5 bg-dark'>
                <div className='col-2 p-1'>
                    <span className='text-decoration-underline'>About</span>
                </div>
                <div className='col-2 p-1'>
                    <span className='text-decoration-underline'>Privacy Policy</span>
                </div>
                <div className='col-2 p-1'>
                    <span className='text-decoration-underline'>Cookies Settings</span>
                </div>
            </div>
        </div>
    )
}
export {InfoCard, VerInfoCard, EndCredits};