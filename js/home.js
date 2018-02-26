$(window).on("load", function() {

	let navbar = $("#navbar_content")
	let buttons = $(".video_overlay")

	buttons.hide()

	button.hide().fadeIn()

	$(window).resize(function() {
		if($(window).width() >= 772) {
			navbar.show()
		} else {
			navbar.hide()
		}
	})
})

