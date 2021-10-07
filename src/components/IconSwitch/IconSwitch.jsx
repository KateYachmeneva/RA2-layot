import React from 'react';
import propTypes from 'prop-types';
import './IconSwitch.css';

const IconSwitch = (props) =>{
    IconSwitch.propTypes = {
        icon: propTypes.string.isRequired,
        onSwitch: propTypes.func.isRequired,
      };
    return (
        <span className = 'Store-Icon-Switch' onClick = {props.onSwitch}>{props.icon}</span>
    )
}
export default IconSwitch;