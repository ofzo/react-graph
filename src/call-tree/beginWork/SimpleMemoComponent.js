module.exports = [{
    name: "SimpleMemoComponent",
    fns: [{
        name: "updateSimpleMemoComponent",
        fns: [{
            name: "@if",
            statement: true,
            fns: [{
                name: "shallowEqual"
            }, {
                name: "@if",
                statement: true,
                fns: [{
                    name: "@if",
                    statement: true,
                    fns: [{
                        name: "bailoutOnAlreadyFinishedWork"
                    }]
                }]
            }]
        }, {
            name: "updateFunctionComponent"
        }]
    }]
}]
