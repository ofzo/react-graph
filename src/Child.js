import React, { useDebugValue } from 'react';
import Context from "./context";
export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log("%c   Child.constructor", "color: blue");
    }
    componentDidMount() {
        console.log("%c   Child.componentDidMount", "color: blue");
    }
    static contextType = Context
    static getDerivedStateFromProps(props, state) {
        console.log("%c   Child.static.getDerivedStateFromProps", "color: blue");
        return state
    }
    getSnapshotBeforeUpdate() {
        console.log("%c   Child.getSnapshotBeforeUpdate", "color: blue");
        return null
    }
    shouldComponentUpdate() {
        console.log("%c   Child.shouldComponentUpdate", "color: blue");
        return true;
    }
    componentDidUpdate() {
        console.log("%c   Child.componentDidUpdate", "color: blue");
    }
    componentWillUnmount() {
        console.log("%c   Child.componentWillUnmount", "color: blue");
    }
    render() {
        console.log("%c   Child.render", "color: blue")
        return (
            <span onClick={() => {
                this.props.onUpdate(this.props.count + 1)
            }}>
                <span>{this.context}</span>;<Sub></Sub>
                Learn React {this.props.count}
            </span>
        );
    }
}

function useD() {
    useDebugValue("online")
}


function Sub() {
    useD()
    return <Context.Consumer>
        {(value) => {
            return <span>{value}</span>
        }}
    </Context.Consumer>
}
