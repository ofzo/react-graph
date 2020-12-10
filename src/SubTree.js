// @ts-nocheck
import React, { useState } from "react"
import "./SubTree.css"
let colors = ["FDDD81", "99D4A9", "FFB680", "A2DEE3", "A1C2F9", "F5A19A"]
function pickColor(parentColor, index) {
    let colors_s = colors.slice(0).filter(color => color !== parentColor)
    index = index % colors_s.length
    return colors_s[index]
}

/**
 *
 * @param {any} props
 */
export default function Subtree(props = {}) {

    let [flod, setFlod] = useState({})
    return props.fns ? <>
        {
            Object.entries(props.fns).map(([key, fns], index) => {
                let color = pickColor(props.color || "", index)
                return <div className="sub-tree">
                    <header className="name" style={{ backgroundColor: "#" + color + "88" }}>
                        <i className="flod" onClick={() => {
                            setFlod({
                                ...flod,
                                [index]: !flod[index]
                            })
                        }}>%</i> <sapn>{key}</sapn>
                    </header>
                    <div className="fns">
                        {flod[index] ? null : <Subtree fns={fns} key={key} color={color} index={index}></Subtree>}
                    </div>
                </div>
            })
        }
    </> : null
}
