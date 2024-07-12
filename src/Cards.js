import React from 'react';
import './App.css';
import myImg from './static/1.jpg';

const Card = (props) => {
    return (
        <div className='col'>
            {
                props.info.map( record => {
                return (
                    <div className='d-flex flex-row p-3 m-3' key={ record.id }>
                        <div className='col col-sm-3'>
                            <img src={ myImg } className='img-thumbnail' alt='Relevant Image'/>
                        </div>
                        <div className='col col-sm-6'>
                            <h4>{ record.title }</h4>
                            <p>{ record.description }</p>
                        </div>
                        <hr />
                    </div>
                )
                })
            }
        </div>
    )
}

const VerCard = (props) => {
    return (
        <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 p-5 m-3 justify-content-between'>
            {
                props.info.map( record => {
                return (
                    <div className='col-4 col-sm-4' key={ record.id }>
                        <img src={ myImg } className="custom-image img-thumbnail" alt='Relevant Image'/>
                        <h4>{ record.title }</h4>
                        <p className='text-break'>{ record.description }</p>
                    </div>
                )
                })
            }
        </div>
    )
}
export {Card, VerCard};