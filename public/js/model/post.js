// PostModel
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  var PostModel;

  PostModel = Backbone.Model.extend({
    urlRoot: '/api/posts',
    initialize: function () {

    },
    validate: function (attrs) {
      
    }
  });

  return PostModel;
});
