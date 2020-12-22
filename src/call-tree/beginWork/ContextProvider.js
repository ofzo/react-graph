module.exports = [{
    name: "ContextProvider",
    fns: [{
        name: "updateContextProvider",
        fns: [{
            name: "pushProvider"
        }, {
            name: "@if",
            statement: true,
            fns: [{
                name: "calculateChangedBits",
                fns: [{
                    name: "@if",
                    statement: true,
                    fns: [
                        { name: "hasLegacyContextChanged" },
                        {
                            name: "@if",
                            statement: true,
                            fns: [{
                                name: "@return bailoutOnAlreadyFinishedWork"
                            }]
                        }]
                }, {
                    name: "@else",
                    statement: true,
                    fns: [{
                        name: "propagateContextChange"
                    }]
                }]
            }]
        }, {
            name: "reconcileChildren"
        }]
    }]
}]
