/**
 *  @name sliders
 *  @description description
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

  var pluginName = 'sliders';
  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  function slider(el, opt) {
  	var count = $(opt.slideshare).length,
			index = opt.index,
			times = opt.times,
			play = null;
		function setslide(){
			if(opt.textslide !=='') {
				$(opt.textslide).removeClass(opt.display);
				$(opt.textslide).eq(index-1).addClass(opt.display);
			}
			if(opt.dotshare !=='') {
				$(opt.dotshare).removeClass(opt.active);
				$(opt.dotshare).eq(index-1).addClass(opt.active);
			}
			$(opt.slideshare).removeClass(opt.display);
			$(opt.slideshare).eq(index-1).addClass(opt.display);
		}
		function showslide(){
			if(index === count){index=0;}
			index++;
			setslide();
			play= setTimeout(showslide,times);
		}
		showslide(index);
		$(opt.dotshare).bind('click', function(){
			index = $(opt.dotshare).index(this);
			clearTimeout(play);
			showslide(index);
		});
		if(opt.previous !=='') {
			$(opt.previous).bind('click', function(){
				if(index === 0){index=count;}
				index=index-2;
				clearTimeout(play);
				showslide(index);
			});
		}
		if(opt.next !=='') {
			$(opt.next).bind('click', function(){
				if(index === count-1){index=-1;}
				clearTimeout(play);
				showslide(index);
			});
		}
  }
  Plugin.prototype = {
    init: function() {
      slider(this.element, this.options);
    },
    publicMethod: function() {
      $.isFunction(this.options.onCallback) && this.options.onCallback();
      this.element.trigger('customEvent');
    },
    destroy: function() {
      $.removeData(this.element[0], pluginName);
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
    slideshare: '.slide',
		dotshare: '.dot',
		previous: '.previous',
		next: '.next',
		times: '3000',
		index: '0',
		active: 'active',
		display: 'block',
		textslide: '.text-slide'
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]({
      key: 'custom'
    });
  });
	
}(jQuery, window));