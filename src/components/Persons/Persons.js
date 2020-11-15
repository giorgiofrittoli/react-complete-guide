import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

    render() {
        console.log("[Persons.js] rendering");
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    click={() => this.props.click(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                    name={person.name}
                    age={person.age} />
            );
        });
    }
};

export default Persons;