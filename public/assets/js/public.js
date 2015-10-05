(function (window, Model) {
    window.request = Model.initialize();
    window.opts = {};
}(window, window.Model));

var artists = '/artists/';

$(document).ready(function() {
	$("a.play.text-ellipsis").on("click", function (e) {
		e.preventDefault();

		var current = $(this);
		console.log(current);
		var id = current.attr("data-id");
		var src = "https://www.youtube.com/embed/" + id;
		
		var iframe = $("#embedIt").attr("src", src);
	});
	
	$("a.play-track").on("click", function (e) {
		e.preventDefault();

		playTrack($(this));
	});

	$("a.viewTrackInfo").on("click", function (e) {
		e.preventDefault();

		var action = "findTrackInfo",
			mbid = $(this).attr("data-mbid");
		console.log(mbid);
		
		request.create({
			action: '/home/track',
			data: {action: action, mbid: mbid},
			callback: function (data) {
				if (data.success) {
					window.location.href = "/home/track";
				}
			}
		});
	});
});

function playTrack(selector) {
	console.log(selector);
}