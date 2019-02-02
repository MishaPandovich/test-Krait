var slideWidth = 300; 

// сделать завтра если ширина экрана больше 1800 .. то 
var slideWidth = 400;

   
$('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);

$('#next_slide').click(nextSlide);
$('#prev_slide').click(prevSlide);

function nextSlide(){
  var hr = document.querySelector('.slide-active');
  var slide = document.querySelectorAll('.slide');
  hr.classList.remove('slide-active');
  hr.nextElementSibling.classList.add('slide-active');

    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide++;

    if(currentSlide>=$('.slidewrapper').children().length - 2)
    {
        $('.slidewrapper').css('left',-(currentSlide-1)*slideWidth);  
        $('.slidewrapper').append($('.slidewrapper').children().first().clone()); 
        $('.slidewrapper').children().first().remove();
        currentSlide--;                        
    }
 
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}
function prevSlide(){
  var hr = document.querySelector('.slide-active');
  var slide = document.querySelectorAll('.slide');
  hr.classList.remove('slide-active');
  hr.previousElementSibling.classList.add('slide-active');

    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if(currentSlide<0)
    {
        $('.slidewrapper').css('left',-(currentSlide+1)*slideWidth);  
        $('.slidewrapper').prepend($('.slidewrapper').children().last().clone()); 
        $('.slidewrapper').children().last().remove();
        currentSlide++;   
    }
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}