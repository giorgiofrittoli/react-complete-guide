import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {

    // triggered when persons changes
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        // http req
        const to = setTimeout(() => {
            console.log("saved");
        }, 100);
        return () => {
            clearTimeout(to);
            console.log("cockpit cleaned up");
        }
    }, [props.persons]);

    // triggered 1 time
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        // http req
        setTimeout(() => {
            console.log("saved");
        }, 100);
    }, []);

    // triggered every update cycle
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        return () => {
            console.log("cockpit cleaned up every time");
        }
    }, []);

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