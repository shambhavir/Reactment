import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import Nav from './Nav';
import strings from "./strings.json";
import "./style.css";

class App extends Component {
    state = {}
    constructor(props) {
        super(props);
    }
    render() {
        const github = "https://github.com/HackRU/Reactment";

        const navEntries = [
            ["Home", window.location.href],
            ["GitHub", github]
        ];

        return (
            <>
              <Nav entries={navEntries}>
              </Nav>
              <Fade>
                <div className="greeting">
                  {strings.greeting}
                </div>
                <a className="github" href={github}>
                  {strings.github}
                </a>
              </Fade>
            </>
        );
    }
}

export default App;
