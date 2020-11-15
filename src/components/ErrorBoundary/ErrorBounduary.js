import React, { Component } from "react";

class ErrorBounduary extends Component {

    state = {
        hasError: false,
        errMsg: "",
    }

    componentDidChatch = (err, info) => {
        this.setState({ hasError: true, errMsg: err });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errMsg}</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBounduary;