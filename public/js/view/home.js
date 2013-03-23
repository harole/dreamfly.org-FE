// HomeView
define([
  'jquery',
  'underscore',
  'backbone',
  // home module
  'text!template/home.html',
  'PostCollection',
  'PostView', // subview
  'PageNavView' // subview
], function ($, _, Backbone, homeTpl, PostCollection, PostView) {
  var HomeView, postsView, currentPage = 1, PAGE_STEP = 5, pageNavView;

  HomeView = Backbone.View.extend({
    initialize: function () {
      this.compiled = _.template(homeTpl);
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
          var $content = homeView.$.find('#content');

          $content.html(postsView.render().el);
          
          // append page navigator
          $.ajax({
            type: 'GET',
            url: '/api/posts/amount',
            dataType: 'json'
          }, function (postsAmount) {
            var links = [], i,
              pageNavData = {
                crt: pageIndex
              },
              pageAmount = Math.ceil(postsAmount / PAGE_STEP);
              
            for (i = 1; i <= pageAmount; ++i) {
              links[i] = '#!/home/page' + i;
            }
            pageNavData.links = links;

            $content.append(pageNavView.render(pageNavData).el);
          });
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
  pageNavView = new PageNavView;

  return HomeView;
});
