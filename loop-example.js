$(document).ready(function () {
	$("#go").on("click", function (e) {
		e.preventDefault();

		var sum = 0;

		$(".number").each(function () {
			sum = sum + parseFloat($(this).val());
		});

		$("#answer").text(sum);
	});
});
