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
    // header
    'HeaderView': 'view/header',
    'HeaderModel': 'model/header',
    // home
    'HomeView': 'view/home',
    'PostCollection': 'collection/post',
    'PostModel': 'model/post'
  }
});

require(['jquery', 'backbone', 'Router', 'html5'], function ($, Backbone, Router) {
  new Router();

  Backbone.history.start();
});
