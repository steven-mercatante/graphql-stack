import React, { Component } from "react";

class StaticSection extends Component {
  render() {
    const { type, name } = this.props;

    return (
      <div className={`section ${type}`}>
        <h4 className="name">{name}</h4>
        <div className="description">{this.props.children}</div>
      </div>
    );
  }
}

export default StaticSection;
