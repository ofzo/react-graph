module.exports = [{
    name: "FunctionComponent",
    fns: [{
        name: "updateFunctionComponent",
        fns: [{
            name: "@if",
            statement: true,
            fns: [{
                name: "getUnmaskedContext"
            }, {
                name: "getMaskedContext"
            }]
        }, {
            name: "prepareToReadContext"
        }, {
            name: "renderWithHooks",
            fns: [{
                name: "Component",
                important: true
            }]
        }, {
            name: "@if",
            statement: true,
            fns: [{
                name: "bailoutHooks"
            }, {
                name: "bailoutOnAlreadyFinishedWork"
            }]
        }, require("./reconcileChildren")]
    }]
}]
