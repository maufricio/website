$(document).ready(main);
var contador = 1;
function main(){
    $('.menu_bar').click(function(){
        //$('nav').toogle();
        if(contador == 1){
            $('nav').animate({
                left:'0'
            });
            contador = 0;
        } else{
            contador = 1;
            $('nav').animate({
                left:'-100%'
            });
        }
    });
};
$(document).ready(function(){
	var altura = $('nav').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('nav').addClass('menu-fixed');
		} else {
			$('nav').removeClass('menu-fixed');
		}
	});
 
});