import React, { Component, Fragment } from "react";
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";

class Person extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log("[Person.js] getDerivedStateFromProps");
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Person.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Person.js] getSnapshotBeforeUpdate");
        return { message: "snapshot" }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Person.js] componentDidUpdate");
        console.log(snapshot);
    }

    render() {
        console.log("[Person.js] render");
        return (
            <Fragment>
                <p onClick={this.props.click} > I'm {this.props.name} and a i am {this.props.age} years old!</p>
                <p > {this.props.children}</p >
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
        );
    }
}

export default withClass(Person, classes.Person);