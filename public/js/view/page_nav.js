/*
PageNavView
Template data:
{
  links: [String] // 每个链接的hash部分，包括 # 符号
  crt: Number // 正整数，表示当前所在的页数
}
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'text!template/page_nav.html'
], function ($, _, Backbone, tpl) {
  var PageNavView;

  PageNavView = Backbone.View.extend({
    className: 'page-nav',
    initialize: function () {
      this.compiled = _.template(tpl);
    },
    render: function (data) {
      this.$el.html( this.compiled(data) );
    }
  });

  return PageNavView;
});
