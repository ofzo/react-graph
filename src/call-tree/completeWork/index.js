module.exports = {
    name: "completeWork",
    important: true,
    fns: [{
        name: "@switch workInProgress.tag",
        statement: true,
        fns: [{
            name: "@case IndeterminateComponent",
            statement: true,
        }, {
            name: "@case LazyComponent",
            statement: true,
        },
        {
            name: "@case SimpleMemoComponent",
            statement: true,
        },
        {
            name: "@case FunctionComponent",
            statement: true,
        },
        {
            name: "@case SimpleMemoComponent",
            statement: true,
        },
        {
            name: "@case ClassComponent",
            statement: true,
            fns: [{
                name: "isLegacyContextProvider"
            }, {
                name: "@if",
                statement: true,
                fns: [{ name: "popLegacyContext" }]
            }]
        },
        {
            name: "@case HostRoot",
            statement: true,
            fns: [{
                name: "popHostContext"
            }, {
                name: "popTopLevelLegacyContextObject"
            }, {
                name: "@if",
                statement: true,
                fns: [{
                    name: "popHydrationState"
                }, {
                    name: "@if",
                    statement: true,
                    fns: [{
                        name: "markUpdate"
                    }]
                }]
            }, {
                name: "updateHostContainer"
            }]
        },
        {
            name: "@case HostComponent",
            statement: true,
            fns: [{
                name: "popHostContext"
            }, {
                name: "getRootHostContainer"
            }, {
                name: "@if",
                statement: true,
                fns: [{
                    name: "updateHostComponent"
                }, {
                    name: "@if",
                    statement: true,
                    fns: [{
                        name: "markUpdate"
                    }]
                }, {
                    name: "markRef"
                }]
            }, {
                name: "@else",
                statement: true,
                fns: [{
                    name: "getHostContext"
                }, {
                    name: "popHydrationState"
                }, {
                    name: "@if", //716
                    statement: true,
                    fns: [{
                        name: "prepareToHydrateHostInstance"
                    }, {
                        name: "@if",
                        statement: true,
                        fns: [{
                            name: "markUpdate"
                        }]
                    }, {
                        name: "@if",
                        statement: true,
                        fns: [{
                            name: "@if",
                            statement: true,
                            fns: [{
                                name: "updateEventListeners"
                            }]
                        }]
                    }]
                }, {
                    name: "@else", //740
                    statement: true,
                    fns: [{
                        name: "createInstance",
                    }, {
                        name: "appendAllChildren"
                    }, {
                        name: "@if",
                        statement: true,
                        fns: [{
                            name: "@if",
                            statement: true,
                            fns: [{
                                name: "updateEventListeners"
                            }]
                        }]
                    }, {
                        name: "finalizeInitialChildren",
                        important: true,
                        fns: [
                            require("./setInitialProperties"),
                            {
                                name: "shouldAutoFocusHostComponent"
                            }
                        ]
                    }, {
                        name: "@if",
                        statement: true,
                        fns: [{
                            name: "markUpdate"
                        }]
                    }]
                }, {
                    name: "@if",
                    statement: true,
                    fns: [{
                        name: "markRef"
                    }]
                }]
            }]
        },
        {
            name: "@case HostText",
            statement: true,
            fns: [{
                name: "@if",
                statement: true,
                fns: [{
                    name: "updateHostText"
                }]
            }, {
                name: "@else",
                statement: true,
                fns: [{
                    name: "getRootHostContainer"
                }, {
                    name: "getHostContext"
                }, {
                    name: "popHydrationState"
                }, {
                    name: "@if",
                    statement: true,
                    fns: [{
                        name: "prepareToHydrateHostTextInstance"
                    }, {
                        name: "@if",
                        statement: true,
                        fns: [{
                            name: "markUpdate"
                        }]
                    }]
                }, {
                    name: "@else",
                    statement: true,
                    fns: [{
                        name: "createTextInstance"
                    }]
                }]
            }]
        },
        {
            name: "@case ForwardRef",
            statement: true,
        },
        {
            name: "@case Fragment",
            statement: true,
        },
        {
            name: "@case Mode",
            statement: true,
        },
        {
            name: "@case Profiler",
            statement: true,
        },
        {
            name: "@case HostPortal",
            statement: true,
            fns: [{
                name: "popHostContainer"
            }, {
                name: "updateHostContainer"
            }]
        },
        {
            name: "@case ContextProvider",
            statement: true,
            fns: [{
                name: "popProvider"
            }]
        },
        {
            name: "@case ContextConsumer",
            statement: true,
        },
        {
            name: "@case MemoComponent",
            statement: true,
        },
        {
            name: "@case IncompleteClassComponent",
            statement: true,
            fns: [{
                name: "isLegacyContextProvider"
            }, {
                name: "@if",
                statement: true,
                fns: [{
                    name: "isLegacyContextProvider"
                }]
            }]
        },
        {
            name: "@case SuspenseListComponent",
            statement: true,
        },
        {
            name: "@case FundamentalComponent",
            statement: true,
        },
        {
            name: "@case ScopeComponent",
            statement: true,
        },
        ]
    }]
}
