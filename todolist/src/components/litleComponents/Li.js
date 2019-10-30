import React from 'react';

export default function Li(props) {
    return (
        <li className="list-group-item" key={props.keyLi}>
            {props.children}
        </li> 
    )
}