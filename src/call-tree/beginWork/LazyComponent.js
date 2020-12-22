module.exports = [{
    name: "LazyComponent",
    fns: [{
        name: "mountLazyComponent",
        fns: [{
            name: "cancelWorkTimer"
        }, {
            name: "readLazyComponentType"
        }, {
            name: "resolveLazyComponentTag"
        }, {
            name: "startWorkTimer"
        }, {
            name: "resolveDefaultProps"
        }, {
            name: "@switch",
            statement: true,
            fns: [{
                name: "@case FunctionComponent",
                statement: true,
                fns: [require("./FunctionComponent")]
            }, {
                name: "@case ClassComponent",
                statement: true,
                fns: [require("./ClassComponent")]
            }, {
                name: "@case ForwardRef",
                statement: true,
                fns: [require("./ForwardRef")]
            }, {
                name: "MemoComponent",
                fns: [{
                    name: "resolveDefaultProps"
                }, require("./MemoComponent")]
            }]
        }]
    }]
}]
