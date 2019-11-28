import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.value,
    tags: this.props.tags
    // imageUrl: "https://picsum.photos/200"
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
    console.log("Button clicked", this);
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>Their are no tags</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "please create a new tag"}
        {/* <div>{this.renderTags()}</div> */}

        <h4>{this.props.children}</h4>

        <h1>{this.state.value}</h1>
        <h2>{this.state.tags}</h2>

        <button onClick={() => this.handleIncrement(this.state.count)}>
          Click me
        </button>
      </React.Fragment>
    );
  }
}
