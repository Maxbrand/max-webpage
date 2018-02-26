$(window).on("load", function() {

	let navbar = $("#navbar_content")
	let buttons = $(".video_overlay")

	buttons.hide().fadeIn(600)

	$(window).resize(function() {
		if($(window).width() >= 772) {
			navbar.show()
		} else {
			navbar.hide()
		}
	})
})

