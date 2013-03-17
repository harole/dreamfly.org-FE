define('Router', [
  'jquery',
  'underscore',
  'backbone',
  'HeaderView',
  'HomeView'
], function ($, _, Backbone, HeaderView, HomeView) {
  var AppRouter;

  AppRouter = Backbone.Router.extend({
    routes: {
      'home/': 'home'
    },
    initialize: function () {
      var headerView;

      headerView = new HeaderView;
      this.headerView = headerView;

      // cached DOM elements
      this.elms = {
        $main: $('#main')
      };

      // common view initialize and display
      headerView.render().$el.fadeIn('slow');
      $('#footer').fadeIn('slow');
    }
    home: function () {
      this.headerView.select('home');

      this.homeView = this.homeView || new HomeView;
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
