module.exports = {
    name: "scheduleRootUpdate",
    fns: [{
        name: "createUpdate"
    }, {
        name: "enqueueUpdate",
        fns: [{
            name: "createUpdateQueue"
        }, {
            name: "cloneUpdateQueue"
        }, {
            name: "appendUpdateToQueue"
        }]
    }, {
        name: "scheduleWork",
        fns: [{
            name: "checkForNestedUpdates"
        }, {
            name: "markUpdateTimeFromFiberToRoot"
        }, {
            name: "checkForInterruption"
        }, {
            name: "recordScheduleUpdate"
        }, {
            name: "getCurrentPriorityLevel"
        }, {
            name: "@if",
            statement: true,

            fns: [{
                name: "@if",
                statement: true,

                fns: [{
                    name: "schedulePendingInteractions"
                },
                require("./performSyncWorkOnRoot")
                ]
            }, {
                name: "@else",
                statement: true,

                fns: [{
                    name: "ensureRootIsScheduled"
                }, {
                    name: "schedulePendingInteractions"
                }, {
                    name: "@if",
                    statement: true,

                    fns: [{
                        name: "flushSyncCallbackQueue"
                    }]
                }]
            }]
        }, {
            name: "@else",
            statement: true,

            fns: [{
                name: "ensureRootIsScheduled",
            }, {
                name: "schedulePendingInteractions"
            }]
        }]
    }]
}
