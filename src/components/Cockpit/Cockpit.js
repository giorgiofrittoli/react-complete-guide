import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = [classes.Button];

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    return (
        <div className="classes.">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button className={btnClass.join(" ")}
                onClick={props.togglePerson}>Toggle persons</button>
        </div>
    );
}

export default cockpit;