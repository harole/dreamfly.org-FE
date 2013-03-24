requirejs.config({
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  },
  paths: {
    // lib
    'html5': 'lib/html5',
    'require_jquery': 'lib/require_jquery',
    'text': 'lib/text',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    // router
    'Router': 'router',
    // module: header
    'HeaderView': 'view/header',
    'HeaderModel': 'model/header',
    // module: home
    'HomeView': 'view/home',
    'PostCollection': 'collection/post',
    'PostModel': 'model/post',
    'HomePageNavModel': 'model/home_page_nav',
    // module: post
    'PostView': 'view/post',
    // module: page navigator
    'PageNavView': 'view/page_nav'
  }
});

require(['jquery', 'backbone', 'Router', 'html5'], function ($, Backbone, Router) {
  new Router();

  Backbone.history.start();
});
