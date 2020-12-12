// @ts-nocheck
import md5 from "md5";
import React, { useState } from "react";
import Context from "./context";
import "./SubTree.scss";


function randomColor(key) {
    return "#" + parseInt(md5(key).slice(0, 6), 36).toString(16).slice(0, 6) + "22"
}
/**
 *
 * @param {any} props
 */
export default function Subtree(props = {}) {

    let [fold, setFold] = useState({})
    var detail = ""
    if (props.fns?.detail) {
        console.log(props)
        detail = props.fns.detail
    }

    return props.fns ? <>
        {
            Object.entries(props.fns).map(([key, subFns], index) => {
                if (key === "detail") {
                    return null
                }
                return <div className="sub-tree" key={key}>
                    <Context.Consumer>
                        {
                            ({ select, update, setRoot }) =>
                                <header className={"name " + (select === key.replace(/\d$/, "") ? 'selected' : '')} style={{
                                    backgroundColor: randomColor(key.replace(/\d$/, ""))
                                }} onClick={(event) => {
                                    event.stopPropagation()
                                    update(key.replace(/\d$/, ""))
                                }} >
                                    <div className="fn" title={detail} onDoubleClick={() => {
                                        debugger
                                        setRoot(subFns)
                                    }}>
                                        {
                                            (!subFns || Object.keys(subFns).length === 0) ? null :
                                                <i className={"arrow " + (fold[index] ? 'fold' : 'un-fold')} onClick={(event) => {
                                                    event.stopPropagation()
                                                    setFold({
                                                        ...fold,
                                                        [index]: !fold[index]
                                                    })
                                                }}>
                                                </i>
                                        }
                                        <span className={fold[index] ? 'flod' : ''}>{key.replace(/\d$/, "")}</span>
                                    </div>
                                </header>
                        }
                    </Context.Consumer>
                    <div className={"fns " + (key.startsWith("@") ? "vertical" : "")} style={{ borderColor: randomColor(key.replace(/\d$/, "")).slice(0, 7) }}>
                        {fold[index] ? null : <Subtree fns={subFns} key={key} index={index} ></Subtree>}
                    </div>
                </div>
            })
        }
    </> : null
}
