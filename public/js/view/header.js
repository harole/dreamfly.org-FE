// HeaderView
define([
  'jquery',
  'underscore',
  'backbone',
  'text!template/header.html'
], function ($, _, Backbone, tpl) {
  var HeaderView, selectedItem;

  HeaderView = Backbone.View.extend({
    el: $('#header'),
    initialize: function () {
      var ajaxLoader;

      // cached DOM elements
      this.elms = {
        $body: $('body')
      };

      $('body')
        .ajaxStart(function () {
          ajaxLoader = ajaxLoader || $('#ajax-loader');
          ajaxLoader.fadeIn('fast');
        })
        .ajaxStop(function () {
          ajaxLoader.fadeOut('fast');
        });
    },
    render: function () {
      this.$el && this.$el.html(tpl);
      return this;
    },
    select: function (platName) {
      var className = 'active';

      this.$('li.active').removeClass(className);
      this.$('li.' + platName).addClass(className);
      this.elms.$body.attr('id', platName);
    }
  });

  return HeaderView;
});
