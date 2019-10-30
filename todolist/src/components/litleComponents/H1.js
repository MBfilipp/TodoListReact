import React from 'react';

export default function H1(props) {
    return (
        <h1>{props.state ? <s className="grey">{props.text}</s> : props.text}</h1>
    )
}