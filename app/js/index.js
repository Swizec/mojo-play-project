var Application = require("mojo-application");

module.exports = Application.extend({
  registerPlugins: function () {


    // globally accessible functions
    this.use(require("mojo-mediator"));

    this.use(require("mojo-models"));

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

      this.firebase = new Firebase('https://my-firebase-name.firebaseIO-demo.com/');; 
  },
  didInitialize: function (options) {
      var entries = new bindable.Collection();

      // should be handled by magic data layer
      this.firebase.on("child_added", function (childSnapshot) {
          entries.push(new bindable.Object(childSnapshot.val()));
      });
      
      var mainView = this.views.create("main", {
          entries: entries
      });

    $(options.element).append(mainView.render());
  }
});
