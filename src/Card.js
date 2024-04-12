import React from 'react';
import './App.css';
import myImg from './static/1.jpg';

function Card(props) {
    return (
        <div className='col'>
            {
                props.info.map( record => {
                return (
                    <div className='d-flex flex-row p-3 m-3' key={ record.id }>
                        <div className='col-3'>
                            <img src={ myImg } className='img-thumbnail' alt='Relevant Image'/>
                        </div>
                        <div className='col-7'>
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

export default Card;