import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  state = {
    persons: [
      { id: "asdadas", name: 'Max', age: 28 },
      { id: "122323", name: 'Manu', age: 29 },
      { id: "33232323", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event, personId) => {
    const personIdex = this.state.persons.findIndex(person => person.id === personId);

    const person = { ...this.state.persons[personIdex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIdex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePerson = () => {
    const isShow = this.state.showPersons;
    this.setState({ showPersons: !isShow });
  }

  render() {

    console.log("[App.js] render");

    const persons = this.state.showPersons ?
      <Persons
        persons={this.state.persons}
        click={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      /> : null;

    return (
      <div className={styles.App}>
        {this.state.showCockpit ?
          <Cockpit
            title={this.props.title}
            persons={this.state.persons.length}
            showPersons={this.state.showPersons}
            togglePerson={this.togglePerson}
          />
          : null}
        <button onClick={() => this.setState({ showCockpit: false })} >Remove cockpit</button>
        { persons}
      </div >
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
