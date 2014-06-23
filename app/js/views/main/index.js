var views = require("mojo-views");

module.exports = views.Base.extend({
    paper: require("./index.pc"),
    sections: {
        menu: require("./menu")
        //content: require("./content")
    }
});
