$(document).ready(function() {
	$("#submitButton").click(function(event) {
		var sue_total = 0;
		var claire_total = 0;
		var c_total = 0;
		var d_total = 0;

		$("#a").hide();
		$("#b").hide();
		$("#c").hide();
		$("#d").hide();
		$("#thanksMessage").hide();
		event.preventDefault();

		var formQ1 = $("input:radio[name=q1]:checked").val();
		var formQ2 = $("input:radio[name=q2]:checked").val();
		var formQ3 = $("input:radio[name=q3]:checked").val();
		var formQ4 = $("input:radio[name=q4]:checked").val();

		$("thanksMessage").fadeToggle();

		if (formQ1 === "answer1") {
			sue_total += 1;
		} else if (formQ1 === "answer2") {
			claire_total += 1;
		} else if (formQ1 === "answer3") {
			c_total += 1;
		} else {
			d_total += 1;
		}

		if (formQ2 === "answer1") {
			claire_total += 1;
		} else if (formQ2 === "answer2") {
			c_total += 1;
		} else if (formQ2 === "answer3") {
			d_total += 1;
		} else {
			sue_total += 1;
		}

		if (formQ3 === "answer1") {
			c_total += 1;
		} else if (formQ3 === "answer2") {
			d_total += 1;
		} else if (formQ3 === "answer3") {
			sue_total += 1;
		} else {
			claire_total += 1;
		}

		if (formQ4 === "answer1") {
			d_total += 1;
		} else if (formQ4 === "answer2") {
			sue_total += 1;
		} else if (formQ4 === "answer3") {
			claire_total += 1;
		} else {
			c_total += 1;
		}

		console.log(sue_total);
		console.log(claire_total);
		console.log(c_total);
		console.log(d_total);

		if ((sue_total > claire_total) && (sue_total > c_total) && (sue_total > d_total)) {
			$("#a").fadeToggle();
		} else if ((claire_total > c_total) && (claire_total > d_total)) {
			$("#b").fadeToggle();
		} else if ((c_total > d_total)) {
			$("#c").fadeToggle();
		} else {
			$("#d").fadeToggle();
		}

		window.scrollTo(0,document.body.scrollHeight);

	});
});