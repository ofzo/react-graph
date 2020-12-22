module.exports = [{
    name: "ClassComponent",
    fns: [{
        name: "updateClassComponent",
        fns: [{
            name: "isLegacyContextProvider",
            fns: [{
                name: "@if",
                statement: true,
                fns: [{
                    name: "pushLegacyContextProvider"
                }]
            }]
        }, {
            name: "prepareToReadContext"
        }, {
            name: "@if",
            statement: true,
            fns: [{
                name: "constructClassInstance"
            }, {
                name: "mountClassInstance"
            }]
        }, {
            name: "@else if",
            statement: true,
            fns: [{
                name: "resumeMountClassInstance"
            }]
        }, {
            name: "@else",
            statement: true,
            fns: [{
                name: "updateClassInstance"
            }]
        }, {
            name: "@return finishClassComponent"
        }]
    }]
}]
