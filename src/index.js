import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from "./context";
import './index.css';
import reportWebVitals from './reportWebVitals';

// console.log(React)
class Entry extends React.Component {
    constructor(props) {
        super(props)
        console.group("------------ mount ------------")
        this.state = {
            show: true,
            theme: "white"
        }
    }
    static contextType = Context
    componentDidMount() {
        console.groupEnd()
    }
    render() {
        if (this.state.show) {
            return <>
                <span onClick={() => {
                    this.setState({
                        theme: "dark"
                    })
                }}> theme {this.context} </span>
                <App onDelete={() => {
                    console.group("------------ delete ------------")
                    this.setState({
                        show: false
                    }, () => {
                        console.groupEnd()
                    })
                }} />

            </>
        }
        return null
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value="123">
            <Entry />
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(<div>root2</div>, document.getElementById('root2'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
