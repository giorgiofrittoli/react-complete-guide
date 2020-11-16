import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import withClass from "../hoc/withClass";
import AuthContext from "../context/auth-context";

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
    changeCounter: 0,
    auth: false,
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      }
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

  loginHandler = () => {
    this.setState({ auth: true });
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
      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })} >Remove cockpit</button>
        <AuthContext.Provider
          value={{ auth: this.state.auth, login: this.loginHandler }}>
          {this.state.showCockpit ?
            <Cockpit
              title={this.props.title}
              persons={this.state.persons.length}
              showPersons={this.state.showPersons}
              togglePerson={this.togglePerson}
            />
            : null}
          {persons}
        </AuthContext.Provider>
      </Aux >
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
