$(function(){
	$('.phone_menu').on('click',function(){
		$('.phone_menu').toggleClass('active');
		$('.main_manu').slideToggle(200);
		return false;
	})
})