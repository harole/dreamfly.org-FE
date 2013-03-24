// PostModel
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  var PostModel;

  PostModel = Backbone.Model.extend({
    urlRoot: '/api/post',
    initialize: function () {

    },
    validate: function (attrs) {
      
    },
    defaults: {
      title: '',
      url: '',
      time: '',
      author: {
        url: '',
        name: ''
      },
      content: ''
    }
  });

  return PostModel;
});
