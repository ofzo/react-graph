module.exports = {
    name: "setInitialProperties",
    fns: [{
        name: "isCustomComponent"
    }, {
        name: "@switch tag",
        statement: true,
        fns: [{
            name: "@case iframe | object | embed",
            statement: true,
            fns: [{
                name: "trapBubbledEvent",
                title: "TOP_LOAD"
            }]
        }, {
            name: "@case video | audio",
            statement: true,
            fns: [{
                name: "@for",
                title: "TOP_ABORT , \nTOP_CAN_PLAY, \nTOP_CAN_PLAY_THROUGH, \nTOP_DURATION_CHANGE, \nTOP_EMPTIED, \nTOP_ENCRYPTED, \nTOP_ENDED, \nTOP_ERROR, \nTOP_LOADED_DATA, \nTOP_LOADED_METADATA, \nTOP_LOAD_START, \nTOP_PAUSE, \nTOP_PLAY, \nTOP_PLAYING, \nTOP_PROGRESS, \nTOP_RATE_CHANGE, \nTOP_SEEKED, \nTOP_SEEKING, \nTOP_STALLED, \nTOP_SUSPEND, \nTOP_TIME_UPDATE, \nTOP_VOLUME_CHANGE, \nTOP_WAITING, \n",
                fns: [{
                    name: "trapBubbledEvent"
                }]
            }]
        }, {
            name: "@case source",
            statement: true,
            fns: [{
                title: "TOP_ERROR",
                name: "trapBubbledEvent"
            }]
        }, {
            name: "@case img |image|link",
            statement: true,
            fns: [{
                name: "trapBubbledEvent",
                title: "TOP_ERROR",
            }, {
                name: "trapBubbledEvent",
                title: "TOP_LOAD",
            }]
        }, {
            name: "form",
            statement: true,
            fns: [{
                name: "trapBubbledEvent",
                title: "TOP_RESET"
            }, {
                title: "TOP_SUBMIT",
                name: "trapBubbledEvent"
            }]
        }, {
            statement: true,
            name: "@case details",
            fns: [{
                title: "TOP_TOGGLE",
                name: "trapBubbledEvent"
            }]
        }, {
            statement: true,
            name: "@case input",
            fns: [{
                name: "ReactDOMInputInitWrapperState"
            }, {
                name: "ReactDOMInputGetHostProps"
            }, {
                name: "trapBubbledEvent",
                title: "TOP_INVALID"
            }, {
                name: "ensureListeningTo"
            }]
        }, {
            statement: true,
            name: "@case option",
            fns: [{
                name: "ReactDOMOptionValidateProps"
            }, {
                name: "ReactDOMOptionGetHostProps"
            }]
        }, {
            statement: true,
            name: "@case select",
            fns: [{
                name: "ReactDOMSelectInitWrapperState"
            }, {
                name: "ReactDOMSelectGetHostProps"
            }, {
                name: "trapBubbledEvent",
                title: "TOP_INVALID"
            }, {
                name: "ensureListeningTo"
            }]
        }, {
            statement: true,
            name: "@case textarea",
            fns: [{
                name: "ReactDOMTextareaInitWrapperState"
            }, {
                name: "ReactDOMTextareaGetHostProps"
            }, {
                name: "trapBubbledEvent",
                title: "TOP_INVALID"
            }, {
                name: "ensureListeningTo"
            }]
        }]
    }, {
        name: "setInitialDOMProperties"
    }, {
        name: "@switch tag",
        statement: true,
        fns: [{
            name: "@case input",
            statement: true,
            fns: [{
                name: "track"
            }, {
                name: "ReactDOMInputPostMountWrapper"
            }]
        }, {
            name: "@case textarea",
            statement: true,
            fns: [{
                name: "track",
            }, {
                name: "ReactDOMTextareaPostMountWrapper"
            }]
        }, {
            name: "@case option",
            statement: true,
            fns: [{
                name: "ReactDOMOptionPostMountWrapper"
            }]
        }, {
            name: "@case select",
            statement: true,
            fns: [{
                name: "ReactDOMSelectPostMountWrapper"
            }]
        }, {
            name: "@default",
            statement: true,
            fns: [{
                name: "@if",
                fns: [{
                    name: "trapClickOnNonInteractiveElement"
                }]
            }]
        }]
    }]
}
