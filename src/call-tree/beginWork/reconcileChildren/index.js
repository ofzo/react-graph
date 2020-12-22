module.exports = {
    name: "reconcileChildren",
    fns: [{
        name: "@if current === null",
        fns: [{
            name: "mountChildFibers",
            fns: [{
                name: "reconcileChildFibers",
                fns: [{
                    name: "@if REACT_ELEMENT_TYPE",
                    fns: [{
                        name: "reconcileSingleElement"
                    }, {
                        name: "placeSingleChild"
                    }]
                }, {
                    name: "@if REACT_PORTAL_TYPE",
                    fns: [{
                        name: "reconcileSinglePortal"
                    }, {
                        name: "placeSingleChild"
                    }]
                }, {
                    name: "@if",
                    fns: [{
                        name: "reconcileSingleTextNode"
                    }, {
                        name: "placeSingleChild"
                    }]
                }, {
                    name: "@if",
                    fns: [{
                        name: "reconcileChildrenArray"
                    }]
                }, {
                    name: "@if",
                    fns: [{
                        name: "reconcileChildrenIterator"
                    }]
                }]
            }]
        }]
    }, {
        name: "@else",
        fns: [{
            name: "reconcileChildFibers",
            fns: [{
                name: "@if REACT_ELEMENT_TYPE",
                fns: [{
                    name: "reconcileSingleElement"
                }, {
                    name: "placeSingleChild"
                }]
            }, {
                name: "@if REACT_PORTAL_TYPE",
                fns: [{
                    name: "reconcileSinglePortal"
                }, {
                    name: "placeSingleChild"
                }]
            }, {
                name: "@if",
                fns: [{
                    name: "reconcileSingleTextNode"
                }, {
                    name: "placeSingleChild"
                }]
            }, {
                name: "@if",
                fns: [{
                    name: "reconcileChildrenArray"
                }]
            }, {
                name: "@if",
                fns: [{
                    name: "reconcileChildrenIterator"
                }]
            }]
        }]
    }]
}
