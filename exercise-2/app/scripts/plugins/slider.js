/**
 *  @name slider
 *  @description description
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    publicMethod
 *    destroy
 */
/*;(function($, window, undefined){
	'use strict';

  var pluginName = 'slider';
  var privateVar = null;
  var privateMethod = function(el, options) {
  };
  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }
  Plugin.prototype = {
    init: function() {
      var that = this;
      this.vars = {
        key: 'value'
      };
    },
    publicMethod: function(params) {
      $.isFunction(this.options.onCallback) && this.options.onCallback();
      this.element.trigger('customEvent');
    },
    slider: function(options) {
    	var defaults = {
    		slideshare: $('.slide-share'),
    		dotshare: $('.dot-share'),
    		previous: $('.previous'),
    		next: $('.next'),
    		index: 0,
    		play: null,
    		event:'click'
    	}
    }
    destroy: function() {
      $.removeData(this.element[0], pluginName);
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
    	var opt = options;
			var count = $('.slide-share').length;
			var index=0;
			var play=null;
			$('.dot-share').bind("click", function(){
				index = $('.dot-share').index(this);
				clearTimeout(play);
				showslide(index);
			})

			$('.previous').bind("click", function(){
				if(index==0){index=count;}
				index= index-2;
				clearTimeout(play);
				showslide(index-2);
			})

			$('.next').bind("click", function(){
				if(index==count){index=0;}
				clearTimeout(play);
				showslide(index);
			})

			function setslide(){
				$('.dot-share').removeClass('active');
				$('.dot-share:eq(' + (index-1) + ')').addClass('active');
				$('.slide-share').removeClass('block');
				$('.slide-share:eq(' + (index-1) + ')').addClass('block');
			}
			function showslide(n){
				if(index==count){index=0;}
				index++;
				setslide();
				play= setTimeout(showslide,3000);
			}
			showslide(index);
    });
  };

  $.fn[pluginName].defaults = {
    key: 'value',
    onCallback: null
  };

  $(function() {
    $('[data-' + pluginName + ']').on('customEvent', function() {
    });

    $('[data-' + pluginName + ']')[pluginName]({
      key: 'custom'
    });
  });*/
	/*var count = $('.slide-share').length;
	var index=0;
	var play=null;
	$('.dot-share').bind("click", function(){
		index = $('.dot-share').index(this);
		clearTimeout(play);
		showslide(index);
	})

	$('.previous').bind("click", function(){
		if(index==0){index=count;}
		index= index-2;
		clearTimeout(play);
		showslide(index-2);
	})

	$('.next').bind("click", function(){
		if(index==count){index=0;}
		clearTimeout(play);
		showslide(index);
	})

	function setslide(){
		$('.dot-share').removeClass('active');
		$('.dot-share:eq(' + (index-1) + ')').addClass('active');
		$('.slide-share').removeClass('block');
		$('.slide-share:eq(' + (index-1) + ')').addClass('block');
	}
	function showslide(n){
		if(index==count){index=0;}
		index++;
		setslide();
		play= setTimeout(showslide,3000);
	}
	showslide(index);*/
	
/*}(jQuery, window));*/
;(function($){
 	$.fn.extend({ 
 		//plugin name - animatemenu
 		slider: function(options) {

			var defaults = {
		    slideshare: $('.slide-share'),
    		dotshare: $('.dot-share'),
    		previous: $('.previous'),
    		next: $('.next'),
    		index: 0,
    		play: null,
    		event:'click',
			};
			
			options = $.extend(defaults, options);
		
    		return this.each(function() {
				  var opt = options;
					var count = opt.slideshare.length;
					var index=0;
					var play=null;
					function setslide(){
						opt.dotshare.removeClass('active');
						$('.dot-share:eq(' + (index-1) + ')').addClass('active');
						opt.slideshare.removeClass('block');
						$('.slide-share:eq(' + (index-1) + ')').addClass('block');
					}
					function showslide(n){
						if(n===count){n=0;}
						n++;
						setslide();
						play= setTimeout(showslide,3000);
					}
					opt.dotshare.bind(opt.click, function(){
						index = opt.dotshare.index(this);
						clearTimeout(play);
						showslide(index);
					});

					opt.previous.bind(opt.click, function(){
						if(index===0){index=count;}
						index= index-2;
						clearTimeout(play);
						showslide(index-2);
					});

					opt.next.bind(opt.click, function(){
						if(index===count){index=0;}
						clearTimeout(play);
						showslide(index);
					});

					
					showslide(index);
    		});
    	}
	});
}(jQuery));