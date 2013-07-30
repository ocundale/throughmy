
$(function() {
	/**
	* for each menu element, on mouseenter, 
	* we enlarge the image, and show both sdt_active span and 
	* sdt_wrap span. If the element has a sub menu (sdt_box),
	* then we slide it - if the element is the last one in the menu
	* we slide it to the left, otherwise to the right
	*/
    $('#sdt_menu > li').bind('mouseenter',function(){
		var $elem = $(this);
		$elem.find('img')
			 .stop(true)
			 .animate({
				'width':'170px',
				'height':'60px',
				'left':'0px'
			 },400,'easeOutBack')
			 .andSelf()
			 .find('.sdt_wrap')
		     .stop(true)
			 .animate({'top':'90px'},500,'easeOutBack')
			 .andSelf()
			 .find('.sdt_active')
		     .stop(true)
			 .animate({'height':'50px'},300,function(){
			var $sub_menu = $elem.find('.sdt_box');
			if($sub_menu.length){
				var left = '130px';
				if($elem.parent().children().length == $elem.index()+1)
					left = '-130px';
				$sub_menu.show().animate({'left':left},200);
			}	
		});
	}).bind('mouseleave',function(){
		var $elem = $(this);
		var $sub_menu = $elem.find('.sdt_box');
		if($sub_menu.length)
			$sub_menu.hide().css('left','0px');
		
		$elem.find('.sdt_active')
			 .stop(true)
			 .animate({'height':'0px'},300)
			 .andSelf().find('img')
			 .stop(true)
			 .animate({
				'width':'0px',
				'height':'0px',
				'left':'65px'},400)
			 .andSelf()
			 .find('.sdt_wrap')
			 .stop(true)
			 .animate({'top':'36px'},500);
	});
});