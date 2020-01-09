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
            </Fade>
        );
    }
}

export default App;
