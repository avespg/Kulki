//предзагрузчик
jQuery(document).ready(function($) {
  $(window).load(function() {
    setTimeout(function() {
      $('.preloader').fadeOut('fast', function() {});
    }, 4500);
 
  });
});

// слайдер с кнопками с задержкой 
window.onload = function (){
	setTimeout(function() { //задержка
		var slides = document.querySelectorAll('#slides .slide');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide,3000);
		 
			function nextSlide() {
			 goToSlide(currentSlide+1);
			}

			function previousSlide() {
			 goToSlide(currentSlide-1);
			}

			function goToSlide(n) {
			 slides[currentSlide].className = 'slide';
			 currentSlide = (n+slides.length)%slides.length;
			 slides[currentSlide].className = 'slide showing';
			}
			
			var next = document.getElementById('next');
			var previous = document.getElementById('previous');
			 
			next.onclick = function() {
				nextSlide();
			};
			previous.onclick = function() {
				previousSlide();
			};

	; }, 4500);//конец задержки
}

//первый скрол - колонки текста - построчно
$(window).scroll(function() {
  $.each($('.leftLi'), function(i, el) {
    setTimeout(function() {
      $(el).addClass("leftColumnStyle");
    }, 500 + (i * 500));

  });
});

$(window).scroll(function() {
  $.each($('.rightLi'), function(i, el) {
    setTimeout(function() {
	  $(el).addClass("rightColumnStyle");
    }, 500 + (i * 500));

  });
});

// Таймлайн со второго скрола
$(window).scroll(function(){				 
$('.left-content li, .right-content li').each(function(){
   	var scrollTop     = $(window).scrollTop(),
       	elementOffset = $(this).offset().top,
   		distance      = (elementOffset - scrollTop),
		    windowHeight  = $(window).height(),
		    breakPoint    = windowHeight*0.9;

		if(distance > breakPoint) {
			$(this).addClass("more-padding");	
		}  if(distance < breakPoint) {
			$(this).removeClass("more-padding");	
		}
	});
});

// Параллакс - фон таймлайна
$('.parallax-window').parallax({imageSrc: 'img/second.jpg'});

// Форма калькулятора
function validate(forma) {
	var listSpan = document.getElementsByTagName("span");
	for (var i=listSpan.length-1; i>=0; i--)
	{
		listSpan[i].remove();
	}
		
	var fName = isFullText(forma.ima);
	var fFamily = isFullText(forma.family);
	var fTel = isFullText(forma.tel);
	var fMail = isFullText(forma.mail);
		
	return fName && fFamily && fTel && fMail;
	}
		
	function isFullText(fieldInp){
		if (fieldInp.value.trim().length == 0)
		{
			fieldInp.style.backgroundColor = "pink";
			var item = document.createElement("span");
			item.innerHTML = "Калі ласка, запоўніце";
			fieldInp.insertAdjacentElement("afterEnd",item);
			return false;
		}
		fieldInp.style.backgroundColor = "white";
		return true;
	}
	
	function calculate () {
	
	var small = document.getElementById('num16').value;
	var big = document.getElementById('num22').value;
	
	var smallPrice = 2;
	var bigPrice = 2.5;
	
	var result = parseFloat(small)*smallPrice + parseFloat(big)*bigPrice;
	
	document.getElementById('result').innerHTML = result + ' руб.';
	
	}
	
	//фото футера 	
function move() {
	$("#img1").toggleClass("img1Style");
	$("#img2").toggleClass("img2Style");
	
};

