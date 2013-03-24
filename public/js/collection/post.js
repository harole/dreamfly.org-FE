// PostCollection
define([
  'jquery',
  'underscore',
  'backbone',
  'PostModel'
], function ($, _, Backbone, PostModel) {
  var PostCollection;

  PostCollection = Backbone.Collection.extend({
    model: PostModel,
    url: '/api/posts'
  });

  return PostCollection;
});
