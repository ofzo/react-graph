module.exports = {
    name: "commitRoot",
    fns: [{
        name: "getCurrentPriorityLevel"
    }, {
        name: "runWithPriority",
        fns: [{
            name: "commitRootImpl",
            fns: [{
                name: "flushPassiveEffects"
            }, {
                name: "startCommitTimer"
            }, {
                name: "getRemainingExpirationTime"
            }, {
                name: "markRootFinishedAtTime"
            }, {
                name: "@if",
                fns: [{
                    name: "pushInteractions"
                }, {
                    name: "startCommitSnapshotEffectsTimer"
                }, {
                    name: "prepareForCommit"
                }, {
                    name: "@while",
                    statement: true,
                    fns: [{
                        name: "@try",
                        statement: true,
                        fns: [{
                            name: "commitBeforeMutationEffects"
                        }]
                    }, {
                        name: "@catch",
                        statement: true,
                        fns: [{
                            name: "captureCommitPhaseError"
                        }]
                    }]
                }, {
                    name: "stopCommitSnapshotEffectsTimer"
                }, {
                    name: "@if",
                    statement: true,
                    fns: [{
                        name: "recordCommitTime"
                    }]
                }, {
                    name: "startCommitHostEffectsTimer"
                }, {
                    name: "@while",
                    fns: [{
                        name: "@try", statement: true,
                        fns: [{
                            name: "commitMutationEffects",
                            important: true,
                            fns: [{
                                name: "@while",
                                fns: [{
                                    name: "@if",
                                    fns: [{
                                        name: "commitResetTextContent"
                                    }]
                                }, {
                                    name: "@if",
                                    fns: [{ name: "commitDetachRef" }]
                                }, {
                                    name: "@switch",
                                    statement: true,
                                    fns: [{
                                        name: "@case Placement",
                                        fns: [{
                                            name: "commitPlacement"
                                        }]
                                    }, {
                                        name: "@case PlacementAndUpdate",
                                        fns: [{
                                            name: "commitPlacement"
                                        }, {
                                            name: "commitWork",
                                            fns: [{
                                                name: "@if",
                                                fns: [{
                                                    name: "@switch",
                                                    statement: true,
                                                    fns: [{
                                                        name: "@case FunctionComponent |ForwardRef|MemoComponent |SimpleMemoComponent",
                                                        fns: [{
                                                            name: "commitHookEffectList"
                                                        }]
                                                    }, {
                                                        name: "@case Profiler"
                                                    }, {
                                                        name: "@case SuspenseComponent",
                                                        fns: [{
                                                            name: "commitSuspenseComponent"
                                                        }, {
                                                            name: "attachSuspenseRetryListeners"
                                                        }]
                                                    }, {
                                                        name: "@case SuspenseListComponent",
                                                        fns: [{
                                                            name: "attachSuspenseRetryListeners"
                                                        }]
                                                    }, {
                                                        name: "@case HostRoot",
                                                        fns: [{
                                                            name: "@if",
                                                            fns: [{
                                                                name: "commitHydratedContainer"
                                                            }]
                                                        }]
                                                    }]
                                                }, {
                                                    name: "commitContainer"
                                                }]
                                            }, {
                                                name: "@else",
                                                fns: [{
                                                    name: "@switch ",
                                                    statement: true,
                                                    fns: [{
                                                        name: "@case FunctionComponent|ForwardRef|MemoComponent|SimpleMemoComponent",
                                                        fns: [{
                                                            name: "commitHookEffectList"
                                                        }]
                                                    }, {
                                                        name: "@case ClassComponent"
                                                    }, {
                                                        name: "@case HostComponent",
                                                        fns: [{
                                                            name: "@if",
                                                            fns: [{
                                                                name: "@if",
                                                                fns: [{
                                                                    name: "commitUpdate"
                                                                }]
                                                            }, {
                                                                name: "@if",
                                                                fns: [{
                                                                    name: "updateEventListeners"
                                                                }]
                                                            }]
                                                        }]
                                                    }, {
                                                        name: "@case HostText",
                                                        fns: [{ name: "commitTextUpdate" }]
                                                    }, {
                                                        name: "@case HostRoot",
                                                        fns: [{
                                                            name: "@if",
                                                            fns: [{
                                                                name: "@if",
                                                                fns: [{ name: "commitHydratedContainer" }]
                                                            }]
                                                        }]
                                                    }, {
                                                        name: "@case Profiler",
                                                    }, {
                                                        name: "@case SuspenseComponent",
                                                        fns: [{
                                                            name: "commitSuspenseComponent"
                                                        }, {
                                                            name: "attachSuspenseRetryListeners"
                                                        }]
                                                    }, {
                                                        name: "@case SuspenseListComponent",
                                                        fns: [{
                                                            name: "attachSuspenseRetryListeners"
                                                        }]
                                                    }, {
                                                        name: "@case IncompleteClassComponent"
                                                    }, {
                                                        name: "@case FundamentalComponent",
                                                        fns: [{
                                                            name: "@if",
                                                            fns: [{
                                                                name: "updateFundamentalComponent"
                                                            }]
                                                        }]
                                                    }, {
                                                        name: "@case ScopeComponent",
                                                        fns: [{
                                                            name: "@if",
                                                            fns: [{
                                                                name: "updateEventListeners"
                                                            }]
                                                        }]
                                                    }]
                                                }]
                                            }]
                                        }]
                                    }, {
                                        name: "@case Hydrating",
                                    }, {
                                        name: "@case HydratingAndUpdate",
                                        fns: [{
                                            name: "commitWork"
                                        }]
                                    }, {
                                        name: "@case Update",
                                        fns: [{ name: "commitWork" }]
                                    }, {
                                        name: "@case Deletion",
                                        fns: [{
                                            name: "commitDeletion"
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }, {
                        name: "@catch",
                        statement: true,
                        fns: [{
                            name: "captureCommitPhaseError",
                        }]
                    }]
                }, {
                    name: "stopCommitHostEffectsTimer"
                }, {
                    name: "resetAfterCommit"
                }, {
                    name: "startCommitLifeCyclesTimer"
                }, {
                    name: "@while",
                    statement: true,
                    fns: [{
                        name: "@try",
                        fns: [{
                            name: "commitLayoutEffects"
                        }]
                    }, {
                        name: "@catch",
                        fns: [{
                            name: "captureCommitPhaseError"
                        }]
                    }]
                }, {
                    name: "stopCommitLifeCyclesTimer"
                }, {
                    name: "requestPaint"
                }, {
                    name: "@if",
                    statement: true,
                    fns: [{
                        name: "popInteractions"
                    }]
                }]
            }, {
                name: "@else",
                fns: [{
                    name: "startCommitSnapshotEffectsTimer",
                }, {
                    name: "stopCommitSnapshotEffectsTimer"
                }, {
                    name: "@if",
                    fns: [{ name: "recordCommitTime" }]
                }, {
                    name: "startCommitHostEffectsTimer"
                }, {
                    name: "stopCommitHostEffectsTimer"
                }, {
                    name: "startCommitLifeCyclesTimer"
                }, {
                    name: "stopCommitLifeCyclesTimer"
                }]
            }, {
                name: "stopCommitTimer"
            }, {
                name: "@if",
                fns: [{
                    name: "@if",
                    fns: [{
                        name: "@if",
                        fns: [{
                            name: "@for",
                            fns: [{
                                name: "scheduleInteractions"
                            }]
                        }]
                    }, {
                        name: "schedulePendingInteractions"
                    }]
                }]
            }, {
                name: "@if",
                fns: [{
                    name: "@if",
                    fns: [{
                        name: "finishPendingInteractions"
                    }]
                }]
            }, {
                name: "onCommitRoot"
            }, {
                name: "ensureRootIsScheduled"
            }, {
                name: "flushSyncCallbackQueue"
            }]
        }]
    }]
}
