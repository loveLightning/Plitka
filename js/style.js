$('.single-item').slick({
    dots: true,
    autoplay:true,
    autoplaySpeed: 3000
});

$('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay:true,
    autoplaySpeed: 3000,
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
  });

  
  $(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
});



$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
  
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});




$(document).ready(function($) {
	$('.popup-open-one').click(function() {
		$('.popup-faden').fadeIn();
		return false;
	});	
  
	
	$('.popup-closer').click(function() {
		$(this).parents('.popup-faden').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-faden').fadeOut();
		}
	});
	
	$('.popup-faden').click(function(e) {
		if ($(e.target).closest('.popuper').length == 0) {
			$(this).fadeOut();					
		}
	});
});



$(document).ready(function($) {
	$('.popup-open-oneq').click(function() {
		$('.popup-fadenq').fadeIn();
		return false;
	});	
  
	
	$('.popup-closerq').click(function() {
		$(this).parents('.popup-fadenq').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fadenq').fadeOut();
		}
	});
	
	$('.popup-fadenq').click(function(e) {
		if ($(e.target).closest('.popuperq').length == 0) {
			$(this).fadeOut();					
		}
	});
});



$(document).ready(function($) {
	$('.popup-openl').click(function() {
		$('.popup-fadel').fadeIn();
		return false;
	});	
  
	
	$('.popup-closel').click(function() {
		$(this).parents('.popup-fadel').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fadel').fadeOut();
		}
	});
	
	$('.popup-fadel').click(function(e) {
		if ($(e.target).closest('.popupl').length == 0) {
			$(this).fadeOut();					
		}
	});
});


$(document).ready(function($) {
	$('.popup-openli').click(function() {
		$('.popup-fadeli').fadeIn();
		return false;
	});	
  
	
	$('.popup-closeli').click(function() {
		$(this).parents('.popup-fadeli').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fadeli').fadeOut();
		}
	});
	
	$('.popup-fadeli').click(function(e) {
		if ($(e.target).closest('.popupli').length == 0) {
			$(this).fadeOut();					
		}
	});
});



$(document).ready(function($) {
	$('.popup-open-oneqp').click(function() {
		$('.popup-fadenqp').fadeIn();
		return false;
	});	
  
	
	$('.popup-closerqp').click(function() {
		$(this).parents('.popup-fadenqp').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fadenqp').fadeOut();
		}
	});
	
	$('.popup-fadenqp').click(function(e) {
		if ($(e.target).closest('.popuperqp').length == 0) {
			$(this).fadeOut();					
		}
	});
});





function readMore() {
 var dots = document.getElementById("dots");
 var more = document.getElementById("more");
 var btn = document.getElementById("btn");

if (dots.style.display === "none") {
 dots.style.display="inline";
 btn.innerHTML="Читать все";
 more.style.display="none";
} else {
 dots.style.display="none";
 btn.innerHTML="Скрыть";
 more.style.display="inline";
 }
}


function readMore() {
 var dots = document.getElementById("dots");
 var more = document.getElementById("more");
 var btn = document.getElementById("btn");

if (dots.style.display === "none") {
 dots.style.display="inline";
 btn.innerHTML="Читать все";
 more.style.display="none";
} else {
 dots.style.display="none";
 btn.innerHTML="Скрыть";
 more.style.display="inline";
 }
}