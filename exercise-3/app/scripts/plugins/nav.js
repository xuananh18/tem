/**
 *  @name navs
 *  @description respnsive menu
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 */
;(function($, window, undefined){
	'use strict';

  var pluginName = 'navs';
  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  function nav(el, opt) {

    el.find('.icon-menu').on('click', function(){
      var menu = $(opt.topnav);
      menu.toggleClass(opt.show);
      $('.closebtn').toggleClass(opt.show);
    });
    $('.closebtn').on('click', function(){
      $('.menu-content').removeClass('show');
      $('.closebtn').removeClass('show');
    })
    window.onclick = function(event) {
      if (!event.target.matches('.icon-menu')) {

        var dropdowns = $('.menu-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    };
  }
  Plugin.prototype = {
    init: function() {
      nav(this.element, this.options);
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
    	var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {
		topnav: '#topnav',
		show: 'show'
  };

	$(function() {
    $('[data-' + pluginName + ']')[pluginName]({
      key: 'custom'
    });
  });
}(jQuery, window));