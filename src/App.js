import React from 'react';
import './App.css';
import Child from './Child';
import logo from './logo.svg';

const Context = React.createContext("234")

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log("%c Parent.constructor", "color: red; font-weight: bold")
    }

    componentDidMount() {
        console.log("%c Parent.componentDidMount", "color: red; font-weight: bold")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("%c Parent.static.getDerivedStateFromProps", "color: red; font-weight: bold")
        return state || null
    }
    getSnapshotBeforeUpdate() {
        console.log("%c Parent.getSnapshotBeforeUpdate", "color: red; font-weight: bold")
        return null
    }
    shouldComponentUpdate() {
        console.log("%c Parent.shouldComponentUpdate", "color: red; font-weight: bold")
        return true
    }
    componentDidUpdate() {
        console.log("%c Parent.componentDidUpdate", "color: red; font-weight: bold")
    }
    componentWillUnmount() {
        console.log("%c Parent.componentWillUnmount", "color: red; font-weight: bold")
    }
    render() {
        console.log("%c Parent.render", "color: red; font-weight: bold")
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Context.Provider value="234">
                        <Child count={this.state.count} onUpdate={(value) => {
                            console.group("------------ update ------------")
                            this.setState({
                                count: value
                            }, () => {
                                console.groupEnd()
                            })
                        }} />
                    </Context.Provider>
                    <button onClick={() => {
                        this.props.onDelete()
                    }}>Delete</button>
                </header>
            </div>
        );
    }
}
