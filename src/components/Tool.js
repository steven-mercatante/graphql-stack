import React, { Component } from "react";

class Tool extends Component {
  render() {
    const { name, description, url, github } = this.props.data;
    return (
      <div className="tool">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        {/* <p className="url">
          <a href={url}>{url}</a>
        </p>
        <p className="github">
          <a href={github}>{github}</a>
        </p> */}
      </div>
    );
  }
}

export default Tool;
