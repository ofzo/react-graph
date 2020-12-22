module.exports = {
    name: "performSyncWorkOnRoot",
    fns: [{
        name: "@if",
        statement: true,

        fns: [require("./commitRoot")]
    }, {
        name: "@else",
        statement: true,

        fns: [{
            name: "flushPassiveEffects"
        }, {
            name: "@if",
            statement: true,

            fns: [{
                name: "prepareFreshStack"
            }, {
                name: "startWorkOnPendingInteractions"
            }]
        }, {
            name: "@if",
            statement: true,

            fns: [{
                name: "pushDispatcher"
            }, {
                name: "pushInteractions"
            }, {
                name: "startWorkLoopTimer"
            }]
        }, {
            name: "@while",
            statement: true,

            fns: [{
                name: "@try",
                statement: true,

                fns: [require("./workLoopSync")]
            }, {
                statement: true,
                name: "@catch", fns: [{
                    name: "handleError"
                }]
            }]
        }, {
            name: "resetContextDependencies"
        }, {
            name: "popDispatcher"
        }, {
            statement: true,
            name: "@if",
            fns: [{
                name: "popInteractions"
            }]
        }, {
            statement: true,
            name: "@if",
            fns: [{
                name: "stopInterruptedWorkLoopTimer",
            }, {
                name: "prepareFreshStack"
            }, {
                name: "markRootSuspendedAtTime"
            }, {
                name: "ensureRootIsScheduled"
            }]
        }, {
            statement: true,
            name: "@if",
            fns: [{
                name: "stopFinishedWorkLoopTimer"
            }, {
                name: "resolveLocksOnRoot"
            }, require("./finishSyncRender")]
        }, {
            name: "ensureRootIsScheduled"
        }]
    }]
}
