module.exports = [{
    name: "HostRoot",
    fns: [{
        name: "updateHostRoot",
        fns: [{
            name: "pushHostRootContext"
        }, {
            name: "processUpdateQueue"
        }, {
            name: "@if",
            statement: true,
            fns: [{
                name: "resetHydrationState"
            }, {
                name: "@return bailoutOnAlreadyFinishedWork"
            }]
        }, {
            name: "enterHydrationState",
            fns: [{
                name: "@if",
                statement: true,
                fns: [{
                    name: "mountChildFibers"
                }]
            }, {
                name: "@else",
                statement: true,
                fns: [require("./reconcileChildren"), {
                    name: "resetHydrationState"
                }]
            }]
        }]
    }]
}]
