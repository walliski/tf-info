'use strict';

$(document).ready(function(){

	setInterval(function () {
		$.get('/voteresults/')
		.success(
			function(data){
				$("#footer_center").html(data);
			}
		);
	}, 300 * 1000);
});
