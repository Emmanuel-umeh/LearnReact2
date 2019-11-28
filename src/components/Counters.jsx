import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 1 },
      { id: 5, value: 3 }
    ],

    tags: "Mega Tag"
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            tags={this.state.tags}
          >
            <h4>Counter {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}
