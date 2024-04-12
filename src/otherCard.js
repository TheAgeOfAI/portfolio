import React from 'react';
import './App.css';
import Card from './Card';
import data from './info.json';

function InfoCard() {

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

export default InfoCard;