import React from 'react';
import './App.css';
import {Card, VerCard} from './Cards';
import data from './info.json';

const InfoCard = () => {

    return (
        <div className='container-fluid p-5'>
            <div className='row justify-content-center align-items-center '>
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
                <div className='row'>
                    <h3>
                        What makes me different ?
                    </h3>
                </div>
                <VerCard
                    info={data[1]}
                />
            </div>
        </div>
    )
}
export {InfoCard, VerInfoCard};