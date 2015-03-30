$(document).ready(function(){
	//parallax
	if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') {
		$("header").css("background-position","50% 0");
	} else {
		$(document).bind('scroll', function() {
			var scroll = $(document).scrollTop();
			if (scroll <= 250) {
				var yPos = scroll * 0.5;
				var coords = '50% -'+ yPos + 'px';
				$("header").css("background-position",coords);
			}
		});
	}
	//scroller
	$(".slider-inner").jScrollPane({
		contentWidth: '2106'
	});
	//parallax
	if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') {
		$("header").css("background-position","50% 0");
	} else {
		$(document).bind('scroll', function() {
			var scroll = $(document).scrollTop();
			if (scroll <= 250) {
				var yPos = scroll * 0.5;
				var coords = '50% -'+ yPos + 'px';
				$("header").css("background-position",coords);
			}
		});
	}
});