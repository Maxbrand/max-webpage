$(window).on("load", function() {

	let title = $("#fade_in_title")
	let navbar = $("#navbar_content")
	let description = $(".description")
	let experience = $(".experience")

	description.hide()
	experience.hide()

	description.fadeIn(800, function() {
		experience.show()
	})

	$(window).resize(function() {
		if($(window).width() >= 772) {
			navbar.show()
		} else {
			navbar.hide()
		}
	})
})