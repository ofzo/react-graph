module.exports = [{
    name: "HostComponent",
    fns: [{
        name: "updateHostComponent",
        fns: [{
            name: "pushHostContext"
        }, {
            name: "@if",
            statement: true,
            fns: [{
                name: "tryToClaimNextHydratableInstance"
            }]
        }, {
            name: "shouldSetTextContent",
            fns: [{
                name: "@if",
                statement: true,
            }, {
                name: "@else ",
                statement: true,
                fns: [{
                    name: "shouldSetTextContents",
                    fns: [{
                        name: "@if",
                        statement: true,
                    }]
                }]
            }]
        }, {
            name: "markRef"
        }, {
            name: "shouldDeprioritizeSubtree",
        }, require("./reconcileChildren")]
    }]
}]
