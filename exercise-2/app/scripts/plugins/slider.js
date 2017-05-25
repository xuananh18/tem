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

  function slideheight(el) {
  	var slideheight = el.height();
  			slideheight = el.css({'height': el.find('.slide-share').height()});
  	$(window).resize(function() {
  			slideheight = el.css({'height': el.find('.slide-share').height()});
  	});
  }

	function setslide(el, opt) {
		el.find('.text-slide').removeClass(opt.display);
		el.find('.text-slide').eq(opt.index).addClass(opt.display);
		el.find('.dot-share').removeClass(opt.active);
		el.find('.dot-share').eq(opt.index).addClass(opt.active);
		el.find('.slide-share').removeClass(opt.display);
		el.find('.slide-share').removeClass('behind');
		el.find('.slide-share').eq(opt.index-1).addClass('behind');
		el.find('.slide-share').eq(opt.index).addClass(opt.display);
	}
	
	function showslide(el, opt){
		var slideshare = el.find('.slide-share'),
        count = slideshare.length;
		if(opt.index === count){opt.index=0;}
		setslide(el, opt);
		opt.index++;
		opt.play = setTimeout(function() {showslide(el, opt);}, opt.times);
	}
	function next(el, opt) {
		var count = el.find('.slide-share').length;
			el.find('.next-share').on('click', function(){
				if(opt.index === count){opt.index = 0;}
				clearTimeout(opt.play);
				showslide(el, opt);
			});
	}

	function btnclick(el, opt){
		el.find('.dot-share').on('click', function(){
			opt.index = el.find('.dot-share').index(this);
			setslide(el, opt);
		});
	}

	function previous(el, opt) {
		var count = el.find('.slide-share').length;
			el.find('.previous-share').on('click', function(){
				if(opt.index === 0){opt.index=count;}
				console.log(opt.index);
				opt.index =opt.index-2;
				
				clearTimeout(opt.play);
				showslide(el, opt);

			});
	}

  Plugin.prototype = {
    init: function() {
    	var opt = this.options,
    			el = this.element;
      showslide(el, opt);
      btnclick(el, opt);
      previous(el, opt);
      next(el, opt);
      slideheight(el);
    },
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
		times: '3500',
		index: 0,
		active: 'active',
		display: 'block',
		play: null
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]({
      key: 'custom'
    });
  });
	
}(jQuery, window));