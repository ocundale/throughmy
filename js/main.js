
$(function() {

	function fadeContent() {
	    $('#container').fadeIn(600).css({'top': '106px'}, 500);
	    $('.nav').animate({ marginTop: '20px'}, 500); //.css({backgroundColor: 'rgba(000,000,000,0.9)'});
	}
	//Listeners
	$('img.bg').fadeIn(2000);
	setTimeout(fadeContent, 1500);
	$('.galleryls').mouseover(function() {
	
	}).mouseout(function() {
	
	});
	$("#galleryls").jFlip(800,533,{background:"black",cornersTop:false}).bind("flip.jflip",function(event,index,total){
  		$("#l1").html("Image "+(index+1)+" of "+total);
	});
});  



