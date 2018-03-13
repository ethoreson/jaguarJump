$(document).ready(function() {
	$("#submitButton").click(function(event) {
		var kiawna_total = 0;
		var sam_total = 0;
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
			kiawna_total += 1;
		} else if (formQ1 === "answer2") {
			sam_total += 1;
		} else if (formQ1 === "answer3") {
			c_total += 1;
		} else {
			d_total += 1;
		}

		if (formQ2 === "answer1") {
			sam_total += 1;
		} else if (formQ2 === "answer2") {
			c_total += 1;
		} else if (formQ2 === "answer3") {
			d_total += 1;
		} else {
			kiawna_total += 1;
		}

		if (formQ3 === "answer1") {
			c_total += 1;
		} else if (formQ3 === "answer2") {
			d_total += 1;
		} else if (formQ3 === "answer3") {
			kiawna_total += 1;
		} else {
			sam_total += 1;
		}

		if (formQ4 === "answer1") {
			d_total += 1;
		} else if (formQ4 === "answer2") {
			kiawna_total += 1;
		} else if (formQ4 === "answer3") {
			sam_total += 1;
		} else {
			c_total += 1;
		}

		console.log(kiawna_total);
		console.log(sam_total);
		console.log(c_total);
		console.log(d_total);

		if ((kiawna_total > sam_total) && (kiawna_total > c_total) && (kiawna_total > d_total)) {
			$("#a").fadeToggle();
		} else if ((sam_total > c_total) && (sam_total > d_total)) {
			$("#b").fadeToggle();
		} else if ((c_total > d_total)) {
			$("#c").fadeToggle();
		} else {
			$("#d").fadeToggle();
		}

		window.scrollTo(0,document.body.scrollHeight);

	});
});