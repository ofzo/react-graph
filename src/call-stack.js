module.exports = {
    name: "ReactDOM.render",
    fns: [{
        name: "Return legacyRenderSubtreeIntoContainer()",
        fns: [{
            name: "legacyCreateRootFromDOMContainer()",
            fns: [{
                name: "shouldHydrateDueToLegacyHeuristic",
                fns: [{
                    name: "getReactRootElementInContainer()"
                }]
            }, {
                name: "Return ReactRoot = new ReactSyncRoot()",
                tag: "ReactRoot",
                fns: [{
                    name: "this._internalRoot = createRootImpl() ",
                    fns: [{
                        name: "Return createContainer()",
                        fns: [{
                            name: "Return createFiberRoot()",
                            fns: [{
                                name: "new FiberRootNode()",
                                tag: "FiberRoot",
                                fns: [{
                                    name: "createHostRootFiber()",
                                    fns: [{
                                        name: "Return createFiber()",
                                        fns: [{
                                            name: "Return HostRoot = new FiberNode()",
                                            tag: "HostRoot",
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }, {
                        name: "markContainerAsRoot()",
                        fns: []
                    }]
                }]
            }]
        }, {
            name: "unbatchedUpdates()",
            fns: [{
                name: "updateContainer",
                fns: [{
                    name: "requestCurrentTime"
                }, {
                    name: "requestCurrentSuspenseConfig"
                }, {
                    name: "computeExpirationForFiber"
                }, {
                    name: "updateContainerAtExpirationTime",
                    fns: [
                        {
                            name: "getContextForSubtree",
                            fns: [{
                                name: "getInstance"
                            }, {
                                name: "findCurrentUnmaskedContext"
                            }, {
                                name: "processChildContext"
                            }]
                        },
                        require("./call-tree/scheduleRootUpdate")
                    ]
                }]
            }]
        }, {
            name: "Return getPublicRootInstance()",
            fns: []
        }]
    }]
}
