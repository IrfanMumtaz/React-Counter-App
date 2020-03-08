import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };

    /* constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */
    render() {
        return (
            <div>
                <span>{this.props.counter.title}</span>
                <button
                    onClick={() => this.handlerIncrement({ id: 1 })}
                    className="btn btn-secondary btn-sm m-2"
                >
                    +
                </button>
                <span style={this.styleCount()} className={this.classCount()}>
                    {this.state.value}
                </span>
                <button
                    onClick={() => this.handlerDecrement({ id: 1 })}
                    className="btn btn-secondary btn-sm"
                    disabled={this.handlerDecrementState()}
                >
                    -
                </button>
                <button
                    className="btn btn-small btn-danger m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    Delete
                </button>
            </div>
        );
    }

    handlerIncrement = product => {
        this.setState({ value: ++this.state.value });
    };

    handlerDecrement = product => {
        if (this.state.value > 0) this.setState({ value: --this.state.value });
    };

    handlerDecrementState() {
        if (this.state.value === 0) return true;
        return false;
    }

    classCount() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";

        return classes;
    }

    styleCount() {
        return {
            fontSize: 18,
            fontWeight: "bold"
        };
    }
}

export default Counter;
