
var views = require("mojo-views"),
    bindable = require("bindable");


var EntryView = views.Base.extend({
    paper: require("./entry.pc")
});

var entries = new bindable.Collection([
    new bindable.Object({label: "Menu 1"}),
    new bindable.Object({label: "Menu 2"})
]);

module.exports = views.Base.extend({
    paper: require("./index.pc"),

    sections: {
        entries: {
            type: "list",
            modelViewClass: EntryView,
            source: entries
        }
    }
});
