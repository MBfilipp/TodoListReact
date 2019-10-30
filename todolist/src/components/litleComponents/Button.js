import React from 'react';

export default function Button(props) {
    let button;
    
    if(props.state) {
        button = <button id={props.id} onClick={props.onClick} className="buttonRight btn btn-warning mx-3 my-2">Uncomplete</button> 
    }else {
        button = <button id={props.id} onClick={props.onClick} className="buttonRight btn btn-success mx-3 my-2">Complete</button>
    } 

    return (
        <React.Fragment>
            {button}
            <button id={props.id} onClick={props.editClick} className="buttonRight btn btn-primary mx-3 my-2">Edit</button>  
        </React.Fragment> 
    )  
}