import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country.cca3);
    return (
        <div className='country'>
            <img src={props.country.flags.png} alt="" />
            <h3>Name: {props.country.name.common}</h3>
            <h4>Capital: {props.country.capital}</h4>
            <button className='details-btn'>Details</button>
        </div>
    );
};

export default Country;