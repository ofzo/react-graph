module.exports = [{
    name: "IndeterminateComponent",
    fns: [{
        name: "mountIndeterminateComponent",
        fns: [{
            name: "@if",
            statement: true,
            fns: [{
                name: "getUnmaskedContext"
            }, {
                name: "getMaskedContext"
            }]
        }]
    }, {
        name: "prepareToReadContext"
    }, {
        name: "renderWithHooks"
    }, {
        name: "@if",
        statement: true,
        fns: [{
            name: "resetHooks"
        }, {
            name: "isLegacyContextProvider",
            fns: [{
                name: "pushLegacyContextProvider"
            }]
        }, {
            name: "@if",
            statement: true,
            fns: [{
                name: "applyDerivedStateFromProps"
            }]
        }, {
            name: "adoptClassInstance"
        }, {
            name: "mountClassInstance"
        }, {
            name: "finishClassComponent"
        }]
    }, {
        name: "@else",
        statement: true,
        fns: [{
            name: "reconcileChildren"
        }]
    }]
}]
