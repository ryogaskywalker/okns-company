$(function () {
	$('body').fadeIn("slow");

	(function () {
		var W = 986,
			H = 720;

		function updateLayout() {
			var width = $(window).width(),
				height = 600,
				scale;
			if (W / H > width / height) {
				scale = height / H;
			} else {
				scale = width / W;
			}
			var w = W * scale,
				h = H * scale;
			$('#movie').attr({
				width: w,
				height: h
			}).css({
				marginLeft: (width - w) / 2,
				marginTop: (height - h) / 2
			});
		}
		updateLayout();
		$(window).on('resize', updateLayout);
	})();
});