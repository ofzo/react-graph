module.exports = [{
    name: "SuspenseComponent",
    fns: [{
        name: "updateSuspenseComponent",
        fns: [{
            name: "shouldRemainOnFallback",
            fns: [{
                name: "@if",
                statement: true,
            }, {
                name: "@else",
                statement: true,
                fns: [{
                    name: "@if",
                    statement: true,
                    fns: [{
                        name: "@if",
                        statement: true,
                        fns: [{
                            name: "addSubtreeSuspenseContext"
                        }]
                    }]
                }]
            }, {
                name: "setDefaultShallowSuspenseContext"
            }, {
                name: "pushSuspenseContext"
            }, {
                name: "@if",
                statement: true,
                fns: [{
                    name: "@if",
                    statement: true,
                    fns: [{
                        name: "@if",
                        statement: true,
                        fns: [{
                            name: "@if",
                            statement: true,
                            fns: [{
                                name: "tryToClaimNextHydratableInstance"
                            }, {
                                name: "@if",
                                statement: true,
                                fns: [{
                                    name: "@if",
                                    statement: true,
                                    fns: [{
                                        name: "mountDehydratedSuspenseComponent"
                                    }]
                                }]
                            }]
                        }]
                    }]
                }, {
                    name: "@if nextDidTimeout",
                    statement: true,
                    fns: [{
                        name: "createFiberFromFragment",
                        tag: "primaryChildFragment"
                    }, {
                        name: "createFiberFromFragment",
                        tag: "fallbackChildFragment"
                    }]
                }, {
                    name: "@else",
                    statement: true,
                    fns: [{
                        name: "mountChildFibers"
                    }]
                }]
            }, {
                name: "@else",
                statement: true,
                fns: [{
                    name: "@if", //1673
                    statement: true,
                    fns: [{
                        name: "@if",
                        statement: true,
                        fns: [{
                            name: "@if",
                            statement: true,
                            fns: [{
                                name: "@if",
                                statement: true,
                                fns: [{
                                    name: "updateDehydratedSuspenseComponent"
                                }]
                            }]
                        }]
                    }]
                }, {
                    name: "@else",
                    statement: true,
                    fns: [{
                        name: "@if",
                        statement: true,
                        fns: [{
                            name: "createFiberFromFragment",
                            tag: "primaryChildFragment"
                        },
                        {
                            name: "createFiberFromFragment",
                            tag: "fallbackChildFragment"
                        }]
                    }, {
                        name: "@else",
                        statement: true,
                        fns: [{
                            name: "reconcileChildFibers"
                        }]
                    }, {
                        name: "createFiberFromFragment"
                    }]
                }]
            }, require("./reconcileChildren").fns[1].fns[0]]
        }]
    }]
}]
