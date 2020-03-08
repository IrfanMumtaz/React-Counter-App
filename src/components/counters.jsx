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
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handlerDelete}
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

    handlerDelete = counterID => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters });
    };
}

export default Counters;
