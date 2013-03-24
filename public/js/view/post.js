// PostView
// Usage:
// To render one post, add property `model` to view instance
// To render many post views, add property `collection` instead
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
      this.compiled = _.template(tpl);
    },
    render: function () {
      var data = {
        posts: (this.model || this.collection).toJSON()
      };
      this.$el.html(this.compiled(data));
      return this;
    }
  });

  return PostView;
});
