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
            {url && (
              <li>
                <a href={url}>
                  <i className="fas fa-link" aria-hidden="true" />
                </a>
              </li>
            )}
            {github && (
              <li>
                <a href={github}>
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Tool;
