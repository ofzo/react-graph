module.exports = [{
    name: "HostPortal",
    fns: [{
        name: "updatePortalComponent",
        fns: [{
            name: "pushHostContainer",
            fns: [{
                name: "@if",
                statement: true,
                fns: [{
                    name: "reconcileChildFibers"
                }]
            }, {
                name: "@else",
                statement: true,
                fns: [{
                    name: "reconcileChildren"
                }]
            }]
        }]
    }]
}]
