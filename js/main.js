$(function() {

	function switchPage(e) {
		e.preventDefault();	
		href = e.target.href;
		page = (href.substr(href.lastIndexOf('/') + 1));
		$(".active").removeClass("active");
		$(this).addClass("active");
		if (typeof page !== 'undefined') {			
			switch (page) {
				case "container":
					$('#contact_page, #prints_page').fadeOut(1000, function() {
							$('#container').fadeIn();
				    });
				    break;
				
				case "prints_page":
					$('#contact_page, #container').fadeOut(1000, function() {
				    	$('#prints_page').fadeIn();
				    });
				    break;

				case "contact_page":
					$('#container, #prints_page').fadeOut(1000, function() {
				    	$('#contact_page').fadeIn(100);
				    });
				    break;
			}
		}
	}

	function centre_content() {
		var win_height = $(window).height(),
		    content_height = $('#content').height();
		$('#content').css('margin','0 auto');

		if ( win_height > content_height ) {
			$('#content').css({
				top : win_height/2 - content_height/2
			});
		}
		else {
			$('#content').css({
				top : '10px',
			});
		}
	}


	//Listeners
	$(document).ready(function() {
		$('.go_link').on('click', switchPage);
		$('#contact_page').click(function(e){
    			$('.copyright').fadeOut(1000,function(){
	      			alert("fadeOut() method is finished!");
	    		});
	  	});
		console.log('go ahead.....inspect me');
		setTimeout(function(){
			console.log('son of a....');
		}, 6000);
		centre_content();
	});
	
});  



