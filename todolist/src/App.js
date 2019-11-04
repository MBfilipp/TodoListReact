import React  from 'react';
import TitleName from './components/TitleName';
import TodoForm from './components/TodoForm';
import TodoTask from './components/TodoTask';

class App extends React.Component {
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
      const id = Number(e.target.id);
      let copyTasksArray = Object.assign([], this.state.tasksArray);
      const promptResult = prompt("Edit text", '');
      let findID = this.state.tasksArray.findIndex(item => item.id === id);
      if(!promptResult) return;
      copyTasksArray[findID].value = promptResult;
      this.setState({ tasksArray: copyTasksArray });
  }

  completeClick(e) {
      const id = Number(e.target.id);  
      let copyTasksArray = Object.assign([], this.state.tasksArray);
      let findID = copyTasksArray.findIndex(item => item.id === id);
      copyTasksArray[findID].crossout = !copyTasksArray[findID].crossout;
      this.setState({ tasksArray: copyTasksArray }); 
  }

  onChange(e) {
      this.setState({
          value: e.target.value
      });  
  }

  onSubmit(e) { 
      e.preventDefault();
      if(!this.state.value) return;
      const newItem = {
          value: this.state.value,
          id: this.state.tasksArray.length,
          key: Date.now(),
          crossout: false
      };
      this.setState(state => ({
          tasksArray: state.tasksArray.concat(newItem),
          value: ''
      }));
  }

  render() {
      return (
          <React.Fragment>
              <TitleName/>
              <TodoForm onSubmit={this.onSubmit} value={this.state.value} onChange={this.onChange}/>
              <TodoTask tasks={this.state.tasksArray} completeClick={this.completeClick} editClick={this.editClick}/>  
          </React.Fragment>          
      );
  }
}


export default App;
