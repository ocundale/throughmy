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
				    	$('#container').fadeIn(100);
				    });
				    break;
				
				case "prints_page":
					$('#contact_page, #container').fadeOut(1000, function() {
				    	$('#prints_page').fadeIn(100);
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

	//Listeners
	$(document).ready(function() {
	$('.go_link').on('click', switchPage);
	$('#contact_page').click(function(e){
    $('.copyright').fadeOut(1000,function(){
	      alert("fadeOut() method is finished!");
	    });
	  });
	console.log('go ahead.....inspect me');
	setTimeout(function(){console.log('son of a....');}, 6000)

});
	
});  



