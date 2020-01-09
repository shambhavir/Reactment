import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import strings from "./strings.json";
import "./style.css";

class App extends Component {
    state = {}
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fade>
              <div className="greeting">
                {strings.greeting}
              </div>
              <a className="github" href="https://github.com/HackRU/Reactment">
                {strings.github}
              </a>
            </Fade>
        );
    }
}

export default App;
