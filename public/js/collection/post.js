// PostCollection
define([
  'jquery',
  'underscore',
  'backbone',
  'PostModel'
], function ($, _, Backbone, PostModel) {
  var PostCollection;

  var urlError = function () {
    throw new Error('A "url" property or function must be specified');
  }

  PostCollection = Backbone.Collection.extend({
    model: PostModel,
    url: '/api/posts',
    comparator: 'time'
  });

  return PostCollection;
});
