"use strict";

function TitleName() {
    return <h1 className="TitleName">TitleName</h1>;
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksArray: [],
            value: '',
            key: null,
            crossout: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.completeClick = this.completeClick.bind(this);
        this.editClick = this.editClick.bind(this);
    }

    editClick(e) {
        const id = e.target.id;
        const promptResult = prompt("Edit text", '');
        let result = this.state.tasksArray.find(item => item.id == id);
        if(promptResult == false) return;
        result.value = promptResult;
    }

    completeClick(e) {
        const id = e.target.id;
        let result = this.state.tasksArray.find(item => item.id == id);
        result.span = true;
        this.setState({ state: 1 }); 
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });  
    }

    onSubmit(e) { 
        e.preventDefault();
        if(this.state.value == false) return;
        const newItem = {
            value: this.state.value,
            id: this.state.tasksArray.length,
            key: Date.now(), //Уникальный идентификатор(не id или length, потому что обновляется по мл)
            crossout: false
        };
        this.setState(e => ({
            tasksArray: e.tasksArray.concat(newItem),
            value: '',
            crossout: false
        }));
    }

    render() {
        return (
            <div>
                <TitleName/>
                <TodoForm onSubmit={this.onSubmit} value={this.state.value} onChange={this.onChange}/>
                <TodoTask tasks={this.state.tasksArray} completeClick={this.completeClick} editClick={this.editClick}/>  
            </div>          
        );
    }
}

function TodoForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input placeholder="Введите задачу" value={props.value} onChange={props.onChange}/>
            <input type="submit" value="Добавить задачу"/>
        </form>
    );
}

class TodoTask extends React.Component {
    render() {
        const tasks = this.props.tasks.map((currentValue) => {
        return (
            <li key={currentValue.key}>
                {currentValue.span ? <s className="grey">{currentValue.value}</s> : currentValue.value}
                <button id={currentValue.id} onClick={this.props.completeClick} className="buttonRight">Complete</button>
                <button id={currentValue.id} onClick={this.props.editClick} className="buttonRight">Edit</button>
            </li>   
          );
        });
      
        return (
          <ul>
            {tasks}
          </ul>  
        );
      }
}

ReactDOM.render(
    <TodoList />,
    document.querySelector("#main")
);