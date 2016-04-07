'use strict';

$(document).ready(function(){
	function getLogo(index){
		$.getJSON('/rotatelogos/'+index+'/')
		.done(function(data){

			$("#footer_left").html('<img src="'+data.url+'"></img>');

			setTimeout(getLogo, 20000, data.next);
		})
		.fail(function () {
			setTimeout(getLogo, 60000, 0);
		});
	}

	getLogo(0);
});
