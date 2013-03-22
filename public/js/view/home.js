// HomeView
define([
  'jquery',
  'underscore',
  'backbone',
  // home module
  'text!template/home.html',
  'PostCollection',
  // post module
  'PostView' // subview
], function ($, _, Backbone, homeTpl, PostCollection, PostView) {
  var HomeView, postsView, currentPage = 1, PAGE_STEP = 5;

  HomeView = Backbone.View.extend({
    initialize: function () {
      this.template = _.template(homeTpl);
    },
    render: function (pageIndex) {
      var homeView = this;

      postsView.collection = new PostCollection;
      postsView.collection.fetch({
        data: {
          page: pageIndex,
          step: PAGE_STEP,
        },
        success: function () {
          homeView.$.find('#content').html(postsView.render().el);
          // Todo: append page navigator
        },
        error: function (collection, xhr) {
          console.log('Error: collection fetch ', xhr);
        }
      });
      return this;
    },
    // override default view remove:
    // 1. remove subview `postsView`
    // 2. remove itself
    remove: function () {
      postsView.remove();
      Backbone.View.prototype.remove.apply(this);
      return this;
    }
  });

  postsView = new PostView;

  return HomeView;
});
