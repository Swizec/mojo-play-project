
var models = require("mojo-models");

module.exports = models.Base.extend({
    deserialize: function (data) {
        return {
            _id: data._id,
            label: data.label
        };
    },

    serialize: function () {
        return {
            _id: this._id,
            label: this.label
        };
    }
});
