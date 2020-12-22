// @ts-nocheck
import React, { useState } from "react";
import Context from "./context";
import "./SubTree.scss";


let colors = ["#A1C2F9", "#F5A19A", "#FEDE81", "#99D4A9", "#FFB680", "#A2DEE3"]
let index = 0
function getColor(previous, parent) {
    var sub = colors.filter(v => v !== previous && v !== parent)
    if (index >= sub.length - 1) {
        index = 0
    }
    return sub[index++]
}

/**
 *
 * @param {any} props
 */
export default function Subtree(props = {}) {

    let [fold, setFold] = useState(false)
    let color = getColor(props.previous, props.parent)
    let previous
    return <div className="sub-tree">
        <Context.Consumer>
            {
                ({ select, update, setRoot }) =>
                    <header className={"name " + (select === props.fn.name ? 'selected' : '') + (props.fn.important ? 'important' : '')} style={{
                        backgroundColor: color
                    }} onClick={(event) => {
                        event.stopPropagation()
                        if (props.fn.statement) {
                            return
                        }
                        update(props.fn.name)
                    }} title={props.fn.title}>
                        <div className="fn" onDoubleClick={(event) => {
                            event.stopPropagation()
                            setRoot(props.fn)
                        }}>
                            {
                                (!props.fn.fns || props.fn.fns.length === 0) ? null :
                                    <i className={"arrow " + (fold ? 'fold' : 'un-fold')} onClick={(event) => {
                                        event.stopPropagation()
                                        setFold(!fold)
                                    }}>
                                    </i>
                            }
                            <span className={fold ? 'fold-flag' : ''}>{props.fn.name} </span>{props.fn.tag ? <span className="tag">{props.fn.tag}</span> : null}
                        </div>
                    </header>
            }
        </Context.Consumer>
        <div className={"fns " + (props.fn.statement ? "vertical" : "")} style={{ borderColor: color }}>
            {
                props.fn.fns && !fold ? props.fn.fns.map((fn, index) => {
                    previous = getColor(previous, color)
                    return <Subtree fn={fn} key={index} previous={previous} parent={color}></Subtree>
                }) : null
            }
        </div>
    </div>
}
