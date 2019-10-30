import React from 'react';

export default function Button(props) {
    if(props.state) {
        return (
            <button id={props.id} onClick={props.onClick} className="buttonRight btn btn-warning mx-3 my-2">Uncomplete</button> 
        )
    }else {
        return (
            <button id={props.id} onClick={props.onClick} className="buttonRight btn btn-success mx-3 my-2">Complete</button>
        )
    }
}