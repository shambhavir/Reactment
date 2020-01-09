import React, { Component } from "react";
import strings from "./strings.json";
import "./style.css";

class Nav extends Component {
    state = {}
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav">
              {this.props.entries.map(([name, url]) =>
                  <a className="nav-item" href={url}>{name}</a>)}
            </div>
        );
    }
}

export default Nav;
