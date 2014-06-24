var Application = require("mojo-application");

module.exports = Application.extend({
  registerPlugins: function () {


    // globally accessible functions
    this.use(require("mojo-mediator"));

    // model - TODO
    // this.use(require("mojo-models"))

    // view controller
    this.use(require("mojo-views"));

    // view
    this.use(require("mojo-paperclip"));

    // routes - TODO
    // this.use(require("mojo-router"));

    this.use(require("./commands"));
    this.use(require("./models"));
    this.use(require("./views"));
    this.use(require("./templates"));
    this.use(require("./routes"));
  },
  didInitialize: function (options) {
      var entries = new bindable.Collection([
          new bindable.Object({label: "Menu 1"}),
          new bindable.Object({label: "Menu 2"})
      ]);
      
      var mainView = this.views.create("main", {
          entries: entries
      });

    $(options.element).append(mainView.render());
  }
});
