import React, { Component } from "react";
import strings from "./strings.json";
import Fade from "react-reveal/Fade"

class App extends Component {
    state = {}
    constructor(props) {
        super(props);
        console.log("Hello from the constructor!");
    }
    render() {
        return (
            <div style={{position: "absolute", left: '50%', top: "50%", transform: "translate(-50%, -50%"}}>
                <Fade left cascade>
                    {strings.greeting}
                </Fade>
            </div>
        );
    }
}

export default App;
