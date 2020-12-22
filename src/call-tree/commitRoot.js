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
                            name: "commitMutationEffects"
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
