import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBounduary from './ErrorBoundary/ErrorBounduary';

class App extends Component {
  state = {
    persons: [
      { id: "asdadas", name: 'Max', age: 28 },
      { id: "122323", name: 'Manu', age: 29 },
      { id: "33232323", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
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

    let persons = null;
    let btnClass = [styles.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBounduary>
                <Person
                  key={person.id}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  name={person.name}
                  age={person.age} />
              </ErrorBounduary>
            );
          })}
        </div>
      );

      btnClass.push(styles.Red);

    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass.join(" ")}
          onClick={this.togglePerson}>Toggle persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
