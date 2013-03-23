define('Router', [
  'jquery',
  'underscore',
  'backbone',
  'HeaderView',
  'HomeView'
], function ($, _, Backbone, HeaderView, HomeView) {
  var AppRouter,
    // current main view
    currentMainView;

  AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      '!/': 'home',
      '!/home': 'home',
      '!/home/page:page': 'home'
    },
    initialize: function () {
      var headerView;

      headerView = new HeaderView;
      this.headerView = headerView;

      // cached DOM elements
      this.elms = {
        $main: $('#main') // main content container
      };

      // common view initialize and display
      headerView.render().$el.fadeIn('slow');
      $('#footer').fadeIn('slow');
    }
    home: function (page) {
      // make sure parameter `page` is a number
      page = page || 1;
      page = (typeof page === 'number') ? page : parseInt(page);

      this.headerView.select('home');

      // update current main
      if (typeof currentMainView.remove === 'function') {
        currentMainView.remove();
      }
      currentMainView = new HomeView;

      this.$main.html((this.mainView.render(page).el));
    },
    defaultAction: function () {
      this.navigate('home/', {
        trigger: true,
        replace: true
      });
    }
  });

  return AppRouter;
});
