import React, { Component } from "react";

class Tool extends Component {
  render() {
    const { name, description, url, github } = this.props.data;
    return (
      <div className="tool">
        <div className="main">
          <p className="name">{name}</p>
          <p className="description">{description}</p>
        </div>
        <div className="info">
          <ul className="links">
            <li>
              <a href={url}>url</a>
            </li>
            <li>
              <a href={github}>github</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tool;
