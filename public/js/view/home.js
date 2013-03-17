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
    },
    getData: function (index, callback) {
      var options, url;

      options = {
        success: function (collection) {
          callback(collection);
        },
        error: function (collection, xhr) {
          console.log('Error: collection fetch ', xhr);
        }
      };
      
      // Override collection's url
      url = this.collection.url;
      if (url.charAt(url.length - 1) !== '/') {
        url += '/';
      }
      options.url = url + index + '/' + PAGE_STEP;

      this.collection.fetch(options);
    },
    appendPage: function (pageIndex) {
      var homeView = this;
      this.getData(pageIndex, function (postCollection) {
        postCollection.forEach(function (model) {
          var postView = new PostView;
          postView.model = model;
          homeView.$('#content').append(postView.render().el);
        });
      });
    }
  });

  return HomeView;
});
