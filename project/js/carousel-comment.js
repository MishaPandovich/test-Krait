var slideWidth = 400; //300
  
$('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);

$('#next_slide').click(nextSlide);
$('#prev_slide').click(prevSlide);

function nextSlide(){
  var slideActive = document.querySelector('.slide-active');
  var slide = document.querySelectorAll('.slide');
  slideActive.classList.remove('slide-active');
  slideActive.nextElementSibling.classList.add('slide-active');

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
  var slideActive = document.querySelector('.slide-active');
  var slide = document.querySelectorAll('.slide');
  slideActive.classList.remove('slide-active');
  slideActive.previousElementSibling.classList.add('slide-active');

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