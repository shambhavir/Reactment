import React, { Component } from "react";
import strings from "./strings.json";
import "./style.css";

class App extends Component {
    state = {}
    constructor(props) {
        super(props);
        console.log("Hello from the constructor!");
    }
    render() {
        return (
            <div className="greeting">
                {strings.greeting}
            </div>
        );
    }
}

export default App;
