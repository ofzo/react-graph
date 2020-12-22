module.exports = [{
    name: "ForwardRef",
    fns: [{
        name: "updateForwardRef",
        fns: [{
            name: "prepareToReadContext"
        }, {
            name: "renderWithHooks"
        }, {
            name: "@if",
            statement: true,
            fns: [{
                name: "bailoutHooks"
            }, {
                name: "@return bailoutOnAlreadyFinishedWork"
            }]
        }, {
            name: "reconcileChildren"
        }]
    }]
}]
