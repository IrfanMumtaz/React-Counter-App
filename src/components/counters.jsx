import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        lastCounterKey: 0,
        counters: []
    };
    render() {
        return (
            <div className="m-2">
                <input
                    type="text"
                    name="addCounter"
                    placeholder="Title"
                    id="addCounter"
                    className="form-control"
                    style={{ maxWidth: 200 }}
                    onKeyPress={this.submitCounter}
                />
                <span
                    style={{ fontSize: 14, fontWeight: "light", opacity: 0.7 }}
                >
                    Press enter to submit!
                </span>
                <div>
                    <button
                        className="btn btn-sm btn-warning mt-4 mb-4"
                        onClick={this.handlerResetAll}
                    >
                        Reset all
                    </button>
                </div>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handlerDelete}
                        onIncrement={this.handlerIncrement}
                        onDecrement={this.handlerDecrement}
                    />
                ))}
            </div>
        );
    }

    submitCounter = e => {
        if (e.key === "Enter") {
            const lastCounterKey = ++this.state.lastCounterKey;
            const counter = {
                title: e.target.value,
                value: 0,
                id: lastCounterKey
            };
            this.setState({ lastCounterKey });

            let counters = this.state.counters;
            counters.push(counter);
            this.setState({ counters });

            this.clearCounterInput();
        }
    };

    clearCounterInput() {
        document.getElementById("addCounter").value = "";
    }

    handlerResetAll = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handlerDelete = counterID => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters });
    };

    handlerIncrement = counter => {
        const counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index].value = ++counter.value;

        this.setState({ counters });
    };

    handlerDecrement = counter => {
        if (counter.value > 0) {
            const counters = [...this.state.counters];
            let index = counters.indexOf(counter);
            counters[index].value = --counter.value;

            this.setState({ counters });
        }
    };
}

export default Counters;
