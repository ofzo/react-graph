// @ts-nocheck
import md5 from "md5";
import React, { useState } from "react";
import Context from "./context";
import "./SubTree.scss";


function randomColor(key) {
    return "#" + parseInt(md5(key).slice(0, 6), 36).toString(16).slice(0, 6) + "44"
}
/**
 *
 * @param {any} props
 */
export default function Subtree(props = {}) {

    let [fold, setFold] = useState({})

    return props.fns ? <>
        {
            Object.entries(props.fns).map(([key, fns], index) => {
                return <div className="sub-tree" key={key}>
                    <Context.Consumer>
                        {
                            ({ select, update }) =>
                                <header className={"name " + (select === key ? 'selected' : '')} style={{ backgroundColor: randomColor(key) }} onClick={() => {
                                    update(key)
                                }}>
                                    <div className="fn">
                                        {(!fns || Object.keys(fns).length === 0) ? null : <i className={"arrow " + (fold[index] ? 'fold' : 'un-fold')} onClick={() => {
                                            setFold({
                                                ...fold,
                                                [index]: !fold[index]
                                            })
                                        }}></i>} <span>{key}</span>
                                    </div>
                                </header>
                        }
                    </Context.Consumer>
                    <div className="fns">
                        {fold[index] ? null : <Subtree fns={fns} key={key} index={index}></Subtree>}
                    </div>
                </div>
            })
        }
    </> : null
}
