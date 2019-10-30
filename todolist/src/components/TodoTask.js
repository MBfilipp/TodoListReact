import React from 'react';
import Li from './litleComponents/Li';
import Button from './litleComponents/Button';
import H1 from './litleComponents/H1';

export default class TodoTask extends React.Component {
    render() {
        const tasks = this.props.tasks.map((currentValue) => {
                return (
                    <Li key={currentValue.key} keyLi={currentValue.key} id={currentValue.id}>
                        <H1 state={currentValue.crossout} text={currentValue.value}/>
                        <Button state={currentValue.crossout} id={currentValue.id} onClick={this.props.completeClick} editClick={this.props.editClick}/>
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