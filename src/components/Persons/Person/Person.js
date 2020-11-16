import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

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

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.auth);
    }

    render() {
        console.log("[Person.js] render");
        return (
            <Fragment>
                {this.context.auth ? <p>Is Authenticated</p> : <p>please login</p>}
                <p onClick={this.props.click} > I'm {this.props.name} and a i am {this.props.age} years old!</p>
                <p > {this.props.children}</p >
                <input
                    //ref={(element) => { this.inputElement = element }}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Fragment>
        );
    }
}

// define props list and types
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default withClass(Person, classes.Person);