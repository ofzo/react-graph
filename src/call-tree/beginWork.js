module.exports = {
    name: "beginWork",
    important: true,
    fns: [
        { name: "@if", statement: true, },
        {
            name: "@else if",
            statement: true,
            fns: [{
                name: "@switch workInProgress.tag",
                statement: true,
                fns: [{
                    name: "@case HostRoot", statement: true, fns: [{ name: "pushHostRootContext" }, { name: "resetHydrationState" }]
                },
                {
                    name: "@case HostComponent", statement: true, fns: [{ name: "pushHostContext" }]
                },
                {
                    name: "@case ClassComponent", statement: true, fns: [{ name: "isLegacyContextProvider" }, { name: "pushLegacyContextProvider" }]
                },
                {
                    name: "@case HostPortal", statement: true, fns: [{ name: "pushHostContainer" }]
                },
                {
                    name: "@case ContextProvider", statement: true, fns: [{ name: "pushProvider" }]
                },
                {
                    name: "@case Profiler", statement: true,
                },
                {
                    name: "@case SuspenseComponent", statement: true, fns: [
                        {
                            name: "@if", statement: true, fns: [{ name: "pushSuspenseContext" }]
                        }, {
                            name: "@else", statement: true, fns: [{ name: "pushSuspenseContext" }]
                        }]
                },
                {
                    name: "@case Profiler",
                    statement: true,
                    fns: [{
                        name: "@if", statement: true,
                        fns: [{
                            name: "@if", statement: true, fns: [{
                                name: "updateSuspenseListComponent"
                            }]
                        }]
                    }, {
                        name: "pushSuspenseContext"
                    }]
                }]
            }, {
                name: "@return bailoutOnAlreadyFinishedWork"
            }]
        },
        { name: "@else", statement: true, },
        {
            name: "@switch Fiber.tag",
            statement: true,
            fns: [
                { name: "@case IndeterminateComponent", statement: true, fns: require("./beginWork/IndeterminateComponent") },
                { name: "@case LazyComponent", statement: true, fns: require("./beginWork/LazyComponent") },
                { name: "@case FunctionComponent", statement: true, important: true, fns: require("./beginWork/FunctionComponent") },
                { name: "@case ClassComponent", statement: true, important: true, fns: require("./beginWork/ClassComponent") },
                { name: "@case HostRoot", statement: true, fns: require("./beginWork/HostRoot") },
                { name: "@case HostComponent", statement: true, important: true, fns: require("./beginWork/HostComponent") },
                { name: "@case HostText", statement: true, important: true, fns: require("./beginWork/HostText") },
                { name: "@case SuspenseComponent", statement: true, fns: require("./beginWork/SuspenseComponent") },
                { name: "@case HostPortal", statement: true, fns: require("./beginWork/HostPortal") },
                { name: "@case ForwardRef", statement: true, fns: require("./beginWork/ForwardRef") },
                { name: "@case Fragment", statement: true, fns: require("./beginWork/Fragment") },
                { name: "@case Mode", statement: true, fns: require("./beginWork/Mode") },
                { name: "@case Profiler", statement: true, fns: require("./beginWork/Profiler") },
                { name: "@case ContextProvider", statement: true, fns: require("./beginWork/ContextProvider") },
                { name: "@case ContextConsumer", statement: true, fns: require("./beginWork/ContextConsumer") },
                { name: "@case MemoComponent", statement: true, fns: require("./beginWork/MemoComponent") },
                { name: "@case SimpleMemoComponent", statement: true, fns: require("./beginWork/SimpleMemoComponent") },
                { name: "@case IncompleteClassComponent", statement: true, fns: require("./beginWork/IncompleteClassComponent") },
                { name: "@case SuspenseListComponent", statement: true, fns: require("./beginWork/SuspenseListComponent") },
                { name: "@case FundamentalComponent", statement: true, fns: require("./beginWork/FundamentalComponent") },
                { name: "@case ScopeComponent", statement: true, fns: require("./beginWork/ScopeComponent") },
            ]
        }
    ]
}
