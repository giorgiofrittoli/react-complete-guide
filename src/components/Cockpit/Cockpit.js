import React, { useEffect, userRef } from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {

    const toggleButtonRef = userRef(null);

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
    }, [props.length]);

    // triggered 1 time
    useEffect(() => {

        // ref is initialized, can use
        this.toggleButtonRef.current.click();

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

    if (props.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    return (
        <div className="classes.">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button
                ref={this.toggleButtonRef}
                className={btnClass.join(" ")}
                onClick={props.togglePerson}
            >Toggle persons</button>
        </div>
    );
}

// re render only when props change
export default React.memo(cockpit);