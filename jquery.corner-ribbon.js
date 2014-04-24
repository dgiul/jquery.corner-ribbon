/**
 * Add a ribbon to the top corner of a page
 *
 * Usage: $.ribbon( [params] );
 *
 * Example: $.ribbon({"text":"Beta"});
 *
 * version : 1.0.0
 * Date    : April 23, 2014
 * Author  : Dan Giulvelzan
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {
	$.extend({
		ribbon: function(options, cb){
			options.text = typeof options.text !== 'undefined' ? options.text : '';

			if (options.text == '') {
				if (cb != null) {
					cb({
						"status": 503,
						"result": "fail"	
					});
				}

				return false; // stop here
			}

			var len = options.text.length;
			var perCharTop = 2.6;
			var perCharLeft = 1;

			var defaults = {
				backgroundColor: '#a00',
				color: '#fff',
				top: Math.abs(len * perCharTop),
				left: -Math.abs((len * perCharLeft) + 30),
				shadow: false,
				textShadow: false
			}

			var params = $.extend({}, defaults, options);

			console.log(params);

			try {
				// Create the new element and add some CSS
				var $div = $('<div>').text(params.text);

				$div.css({
					'background-color': params.backgroundColor,
					'color': params.color,
					'left': params.left,
					'top': params.top,
					'z-index': 99999,
					'overflow': 'hidden',
					'white-space': 'nowrap',
					'letter-spacing': '0.9px',
					'position': 'fixed',
					'display': 'block',
					'margin': '1px 0',
					'padding': '10px 50px',
					'text-align': 'center',
					'text-decoration': 'none',
					'border': '1px solid #faa',
					'font': 'bold 90% \'Helvetica Neue\', Helvetica, Arial, sans-serif',
					'-webkit-transform': 'rotate(-45deg)',
	     			'-moz-transform': 'rotate(-45deg)',
	      			'-ms-transform': 'rotate(-45deg)',
	       			'-o-transform': 'rotate(-45deg)',
	          		'transform': 'rotate(-45deg)'
				});

				if (params.shadow) {
					$div.css({
						'-webkit-box-shadow': '0 0 10px #888',
	     				'-moz-box-shadow': '0 0 10px #888',
	          			'box-shadow': '0 0 10px #888'
					});
				};

				if (params.textShadow) {
					$div.css({
						'text-shadow': '0 0 5px #444'
					});
				};

				$('body').append( $div );

				if (cb != null) {
					cb({
						"status": 200,
						"result": "success"
					});
				}
			} catch(err) {
				if (cb != null) {
					cb({
						"status": 503,
						"result": "fail",
						"message": err
					});
				}
			}
			
		}
	});

}));