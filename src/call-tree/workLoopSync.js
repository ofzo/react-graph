//  react/packages/react-reconciler/src/ReactFiberBeginWork.js:2796

module.exports = {
    name: "workLoopSync",
    important: true,
    fns: [{
        name: "@while",
        statement: true,
        fns: [{
            name: "performUnitOfWork",
            fns: [{
                name: "startWorkTimer",
            },
            require("./beginWork"),
            {
                name: "@if",
                statement: true,
                fns: [{
                    name: "completeUnitOfWork",
                    fns: [{
                        name: "@while",
                        statement: true,
                        fns: [{
                            name: "@if",
                            fns: [{
                                name: "completeWork",
                                fns: [require("./completeWork")]
                            }]
                        }, {
                            name: "stopWorkTimer"
                        }, {
                            name: "resetChildExpirationTime"
                        }, {
                            name: "@else",
                            statement: true,
                            fns: [{
                                name: "unwindWork"
                            }]
                        }]
                    }]
                }]
            }]
        }]
    }]
}
