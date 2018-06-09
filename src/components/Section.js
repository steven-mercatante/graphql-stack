import React, { Component } from "react";
import Tool from "./Tool";

class Section extends Component {
  render() {
    const { type, data } = this.props;
    const { name, description, tools } = data;

    return (
      <div className={`section ${type}`}>
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <div className="toolsList">
          {tools.map((data, i) => <Tool data={data} key={i} />)}
        </div>
      </div>
    );
  }
}

export default Section;
