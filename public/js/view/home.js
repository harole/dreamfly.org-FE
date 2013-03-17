// HomeView
define([
  'jquery',
  'underscore',
  'backbone',
  // home module
  'text!template/home.html',
  'PostCollection',
  // post module
  'PostView'
], function ($, _, Backbone, homeTpl, PostCollection, PostView) {
  var HomeView, currentPage = 0, PAGE_STEP = 5;

  HomeView = Backbone.View.extend({
    initialize: function () {
      this.template = _.template(tpl);
      this.collection = new PostCollection;
    }
  });

  return HomeView;
});
