import React from 'react';
import './App.scss';
import callStack from "./call-stack";
import Context from "./context";
import SubTree from "./SubTree";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { select: "", root: callStack }

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
                    {this.state.root === callStack ? null : <div className="back" onClick={() => {
                        this.setState({ root: callStack })
                    }}>返回到 ReactDOM.render</div>}
                    <div className={"flag " + (this.state.select ? 'show' : 'hide')} onClick={() => { this.setState({ select: "" }) }}>{this.state.select}</div>
                    <div className="scroll">
                        <div className="inner">
                            <SubTree name="React Flame Graph" fn={this.state.root} ></SubTree>
                        </div>
                    </div>
                </div>
            </Context.Provider>
        );
    }
}
