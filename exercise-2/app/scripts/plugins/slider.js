/**
 *  @name sliders
 *  @description slider code
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

	function setslide(opt){
		if(opt.textslide !=='') {
			$(opt.textslide).removeClass(opt.display);
			$(opt.textslide).eq(opt.index).addClass(opt.display);
		}
		if(opt.dotshare !=='') {
			$(opt.dotshare).removeClass(opt.active);
			$(opt.dotshare).eq(opt.index).addClass(opt.active);
		}
		$(opt.slideshare).removeClass(opt.display);
		$(opt.slideshare).eq(opt.index).addClass(opt.display);
	}
	
	function showslide(opt){
		var slideshare = $(opt.slideshare),
        count = slideshare.length;
		if(opt.index === count){opt.index=0;}
		setslide(opt);
		opt.index++;
		opt.play = setTimeout(function() {showslide(opt);}, opt.times);
	}
	function next(opt) {
		var count = $(opt.slideshare).length;
		if(opt.next !=='') {
			$(opt.next).on('click', function(){
				if(opt.index === count){opt.index = 0;}
				clearTimeout(opt.play);
				showslide(opt);
			});
		}
	}

	function btnclick(opt){
		$(opt.dotshare).on('click', function(){
			opt.index = $(opt.dotshare).index(this);
			setslide(opt);
		});
	}

	function previous(opt) {
		var count = $(opt.slideshare).length;
		if(opt.previous !=='') {
			$(opt.previous).on('click', function(){
				if(opt.index === 0){opt.index=count;}
				opt.index =opt.index-2;
				clearTimeout(opt.play);
				showslide(opt);
			});
		}
	}

  Plugin.prototype = {
    init: function() {
    	var opt = this.options;
      showslide(opt);
      btnclick(opt);
      previous(opt);
      next(opt);
      console.log(this.element);
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
		index: 0,
		active: 'active',
		display: 'block',
		textslide: '.text-slide',
		play: null
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]({
      key: 'custom'
    });
  });
	
}(jQuery, window));