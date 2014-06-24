
var views = require("mojo-views"),
    bindable = require("bindable");


var EntryView = views.Base.extend({
    paper: require("./entry.pc")
});

module.exports = views.Base.extend({
    paper: require("./index.pc"),

    sections: {
        entries: {
            type: "list",
            modelViewClass: EntryView,
            source: "entries"
        }
    },

    addEntry: function () {
        this.event.preventDefault();

        // there is probably a more mojoesque way to do this
        var $label = $("#add-entry");

        // this is wrong, should be handled by funky magical data layer
        this.application.firebase.push({label: $label.val()});

        //this.entries.push(new bindable.Object({label: $label.val()}));
        $label.val("");
    }
});
