import React from 'react';
import './App.scss';
import Context from "./context";
import flameGraph from "./flameGraph.json";
import SubTree from "./SubTree";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { select: "", root: flameGraph }

    }
    render() {
        return (
            <Context.Provider value={{
                select: this.state.select,
                update: (select) => {
                    this.setState({ select: select === this.state.select ? '' : select })
                },
                setRoot: (node) => {
                    this.setState({ root: node })
                }
            }}>
                <div className="App">
                    {this.state.root === flameGraph ? null : <div className="back" onClick={() => {
                        this.setState({ root: flameGraph })
                    }}>返回到 ReactDOM.render</div>}
                    <div className={"flag " + (this.state.select ? 'show' : 'hide')} onClick={() => { this.setState({ select: "" }) }}>{this.state.select}</div>
                    <div className="scroll">
                        <div className="inner">
                            <SubTree name="React Flame Graph" fns={this.state.root} parent={flameGraph}></SubTree>
                        </div>
                    </div>
                </div>
            </Context.Provider>
        );
    }
}
