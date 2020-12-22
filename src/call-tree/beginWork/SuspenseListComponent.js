module.exports = [{
    name: "SuspenseListComponent",
    fns: [{
        name: "updateSuspenseListComponent",
        fns: [{
            name: "validateRevealOrder"
        }, {
            name: "validateTailOptionss"
        }, {
            name: "validateSuspenseListChildren"
        }, {
            name: "reconcileChildren"
        }, {
            name: "hasSuspenseContext"
        }, {
            name: "@if",
            statement: true,
            fns: [{
                name: "setShallowSuspenseContext"
            }]
        }, {
            name: "@else",
            statement: true,
            fns: [{
                name: "@if",
                statement: true,
                fns: [{
                    name: "propagateSuspenseContextChange"
                }]
            }, {
                name: "setDefaultShallowSuspenseContext"
            }]
        }, {
            name: "pushSuspenseContext"
        }, {
            name: "@if",
            statement: true,
        }, {
            name: "@else",
            statement: true,
            fns: [{
                name: "@switch",
                statement: true,
                fns: [
                    {
                        name: "@case forwards",
                        statement: true,
                        fns: [{
                            name: "findLastContentRow"
                        }, {
                            name: "initSuspenseListRenderState"
                        }]
                    },
                    {
                        name: "@case backwards",
                        statement: true,
                        fns: [{
                            name: "@while",
                            statement: true,
                            fns: [{
                                name: "@if",
                                statement: true,
                                fns: [{
                                    name: "findFirstSuspended"
                                }]
                            }]
                        }, {
                            name: "initSuspenseListRenderState"
                        }]
                    },
                    {
                        name: "@case together",
                        statement: true,
                        fns: [{
                            name: "initSuspenseListRenderState"
                        }]
                    },
                ]
            }]
        }]
    }]
}]
