import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    tags: ["mega"]
    // imageUrl: "https://picsum.photos/200"
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  handleIncrement = e => {
    console.log(e);
    this.setState({
      count: this.state.count + 1
    });
    console.log("Button clicked", this);
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>Their are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "please create a new tag"}
        <div>{this.renderTags()}</div>

        <h1>{this.state.count}</h1>

        <button onClick={() => this.handleIncrement(this.state.count)}>
          Click me
        </button>
      </React.Fragment>
    );
  }
}
