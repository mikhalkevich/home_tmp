$(function(){
 
 $('.menu a').bind(
  { 'mouseover': function(){
			      var id = $(this).attr('id');
				  var color = $(this).attr('data-color');
				  $('.menuright').css('background', '#'+color);
			      $(this).next('div').attr({'class': 'overa_new', 'id': 'ov_'+id});
    },
	'mouseout': function(){
				  $(this).next('div').attr({'class': 'overa', 'id': 'ov'});
				  $('.menuright').css('background', '#3f51b5');
	}
  });
 
  
 if($('body').height() < 650){
  $('.mainblock').css('height', 'auto')
  $('.lefttop').css('height', 'auto')
 }
 if($('body').width()<735){
 x = true;
 }else{
 x = false
 }
$('.click_hide').on('click', function(){
 if (!x){
   $('.menu a span').hide();
   $('.menuleft').hide();
   $('.menu a').next('div').hide();
   $('.overa').css({'margin-left':'60px'}); //по умолчанию 290px
   $('.lefttop').css({'width':'120px'}); //по умолчанию 350px
  x = true;
 }
 else {
   $('.menu a span').show();
   $('.menuleft').show();
   $('.menu a').next('div').show();
   $('.overa').css({'margin-left':'0'}); //по умолчанию 290px
   $('.lefttop').css({'width':'350px'}); //по умолчанию 350px
  x = false;
 }
});
});