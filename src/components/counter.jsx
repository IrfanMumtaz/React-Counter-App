import React, { Component } from "react";

class Counter extends Component {
    /* state = {
        value: counter.value
    }; */

    /* constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */
    render() {
        const { counter, onDecrement, onIncrement, onDelete } = this.props;
        return (
            <div>
                <span>{counter.title}</span>
                <button
                    onClick={() => onIncrement(counter)}
                    className="btn btn-secondary btn-sm m-2"
                >
                    +
                </button>
                <span style={this.styleCount()} className={this.classCount()}>
                    {counter.value}
                </span>
                <button
                    onClick={() => onDecrement(counter)}
                    className="btn btn-secondary btn-sm"
                    disabled={this.handlerDecrementState()}
                >
                    -
                </button>
                <button
                    className="btn btn-small btn-danger m-2"
                    onClick={() => onDelete(counter.id)}
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
