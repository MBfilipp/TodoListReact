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
      const id = e.target.id;
      let copyObj = Object.assign([], this.state.tasksArray);
      const promptResult = prompt("Edit text", '');
      let result = this.state.tasksArray.findIndex(item => item.id == id);
      if(!promptResult) return;
      copyObj[result].value = promptResult;
      this.setState({ tasksArray: copyObj });
  }

  completeClick(e) {
      const id = e.target.id;  
      let copyObj = Object.assign([], this.state.tasksArray);
      let result = copyObj.findIndex(item => item.id == id);
      copyObj[result].crossout = !copyObj[result].crossout;
      this.setState({ tasksArray: copyObj }); 
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
      this.setState(e => ({
          tasksArray: e.tasksArray.concat(newItem),
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
