'use strict';

$(document).ready(function(){
	function getPage(index){
		$.getJSON('/pages/'+index+'/')
		.done(function(data){

			$.get(data.url)
			.done(function(content){
				$("#content").html(content);
			});

			setTimeout(getPage, data.duration * 1000, data.next);
		})
		.fail(function () {
			setTimeout(getPage, 60000, 0);
		});
	}

	getPage(0);
});
