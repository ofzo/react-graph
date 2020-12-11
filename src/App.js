import React from 'react';
import './App.scss';
import Context from "./context";
import flameGraph from "./flameGraph.json";
import SubTree from "./SubTree";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { select: "", flameGraph }
    }
    render() {
        return (
            <Context.Provider value={{
                select: this.state.select,
                update: (select) => {
                    this.setState({ select })
                }
            }}>
                <div className="App">
                    <div className={"flag " + (this.state.select ? 'show' : 'hide')} onClick={() => { this.setState({ select: "" }) }}>{this.state.select}</div>
                    <div className="scroll">
                        <div className="inner">
                            <SubTree name="React Flame Graph" fns={this.state.flameGraph}></SubTree>
                        </div>
                    </div>
                </div>
            </Context.Provider>
        );
    }
}
