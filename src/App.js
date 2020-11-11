import React, {
  Component
} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      {
        name: "Max", age: 28
      },
      {
        name: "Manu", age: 29
      },
      {
        name: "Steph", age: 22
      }
    ]
  }

  render() {
    return (
      <div className="App" >
        <h1> Hi, i 'm a react app</h1>
        <p> this is really working </p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: racing</Person>
      </div>
    );
  }
}

export default App;