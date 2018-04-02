$(window).on("load", function() {

	let description = $(".description")
	let experience = $(".experience")

	description.hide()
	experience.hide()

	description.fadeIn(800, function() {
		experience.fadeIn(400)
	})
})