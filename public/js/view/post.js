// PostView
define([
  'jquery',
  'underscore',
  'backbone',
  'PostModel',
  'text!template/post.html'
], function ($, _, Backbone, PostModel, tpl) {
  var PostView;

  PostView = Backbone.View.extend({
    initialize: function () {
      // delay parse template string to template engin
      this.template = _.template(tpl)
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
    },
    render: function () {
      var model = this.model;
      if (model) {
        this.$el.html( this.template(model.toJSON()) );
      }
      return this;
    }
  });

  return PostView;
});
