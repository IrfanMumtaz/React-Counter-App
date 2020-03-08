import React, { Component } from "react";

class Counter extends Component {
    /* state = {
        value: this.props.counter.value
    }; */

    /* constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */
    render() {
        return (
            <div>
                <span>{this.props.counter.title}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2"
                >
                    +
                </button>
                <span style={this.styleCount()} className={this.classCount()}>
                    {this.props.counter.value}
                </span>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
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

    handlerDecrementState() {
        if (this.props.counter.value === 0) return true;
        return false;
    }

    classCount() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";

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
