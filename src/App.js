import React from 'react';
import './App.css';
import flameGraph from "./flameGraph.json";
import SubTree from "./SubTree";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = flameGraph
    }
    render() {
        return (
            <div className="App">
                <SubTree name="React Flame Graph" fns={this.state}></SubTree>
            </div>
        );
    }
}
