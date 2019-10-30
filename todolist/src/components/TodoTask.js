import React from 'react';

function H1(props) {
    return (
        <h1>{props.state ? <s className="grey">{props.text}</s> : props.text}</h1>
    )
}

function Button(props) {
    if(props.state) {
        return (
            <React.Fragment>
                <button id={props.id} onClick={props.onClick} className="buttonRight btn btn-warning mx-3 my-2">Uncomplete</button> 
            </React.Fragment>
        )
    }else {
        return (
            <React.Fragment>
                <button id={props.id} onClick={props.onClick} className="buttonRight btn btn-success mx-3 my-2">Complete</button>
            </React.Fragment>
        )
    }
}

function Li(props) {
    return (
        <li className="list-group-item" key={props.key}>
            {props.children}
        </li> 
    )
}

export default class TodoTask extends React.Component {
    render() {
        const tasks = this.props.tasks.map((currentValue) => {
                return (
                    <Li key={currentValue.key} id={currentValue.id} onClick={this.props.completeClick} onClick={this.props.editClick}>
                        <H1 state={currentValue.crossout} text={currentValue.value}/>
                        <Button state={currentValue.crossout} id={currentValue.id} onClick={this.props.completeClick}/>
                    </Li>
                ); 
        });
      
        return (
            <div>
                <h1 className="text-center">Задачи</h1>
                <ul className="list-group list-group-flush">
                    {tasks}
                </ul>   
            </div>
            
        );
      }
  }