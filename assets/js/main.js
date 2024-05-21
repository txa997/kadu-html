/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
"use strict";


const lenis = new Lenis({
	duration: 2,	
})

// smoooth scroll activation start
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// preloader
document.addEventListener("DOMContentLoaded", function () {

	let preloader = document.querySelector("#preloader");

	window.addEventListener('load', function(){

		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();
	  
			  }, 1000 ) ;
		}

		// text-animation
		Splitting();

		// hero-1-animation
		const h1tl = gsap.timeline();

		h1tl.fromTo(".ftc-hero-1-content" , {  opacity: 0, duration: 1 }, { opacity: 1, })
			.from(".ftc-hero-1-content .btn-wrap " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 })
			.from(".ftc-hero-1-content .inner-div " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",
			duration:1.5, ease: "bounce.out", opacity:0 }, "<.3")
			.from(".ftc-hero-1-content .title  " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",duration:1.5, ease: "bounce.out", opacity:0 }, "<.3")
			.from(".ftc-hero-1-content .subtitle  " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",duration:1.5, ease: "bounce.out", opacity:0 }, "<.3");

		// hero-2-animation
		const h2tl = gsap.timeline();

		h2tl.from(".ftc-hero-2-item-wrap .item-3-ani " , { scale: 0,	duration:2, ease: "ease", opacity:0 })
		h2tl.from(".ftc-hero-2-item-wrap .item-2-ani " , { xPercent: -100,	duration:1, ease: "bounce.out", opacity:0 }, "<1" )
		h2tl.from(".ftc-hero-2-item-wrap .item-1-ani " , { xPercent: -100,	duration:1, ease: "bounce.out", opacity:0 }, "<.5")
		h2tl.from(".ftc-hero-2-item-wrap .item-4-ani " , { xPercent: 100,	duration:1, ease: "bounce.out", opacity:0 }, "1" )
		h2tl.from(".ftc-hero-2-item-wrap .item-5-ani " , { xPercent: 100,	duration:1, ease: "bounce.out", opacity:0 }, "1.5" )
		h2tl.from(".ftc-hero-2-content .title " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 }, "<")
		h2tl.from(".ftc-hero-2-content .subtitle " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 }, "<.1")
			

		// hero-3-animation
		const h3tl = gsap.timeline();

		h3tl.from(".ftc-hero-3-bg-svg-1 svg path" , { xPercent: -50, transformOrigin: "left", stagger: -.05,	duration:2.5, ease: "ease", })
		.from(".ftc-hero-3-bg-svg-2 svg path" , { xPercent: 50, transformOrigin: "left", stagger: -.05,	duration:2.5, ease: "ease", }, "<=")
		.from(".ftc-hero-3-disc " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 }, "<=1" )
		.from(".ftc-hero-3-title " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 }, "<=.5")

		// hero-3-animation
		const h4tl = gsap.timeline();

		h4tl.from(".section-bg-1-cube-1" , { xPercent: -430, yPercent: -220 , rotate: 360,	duration:2.5, ease: "ease", })
			.from(".section-bg-1-cube-2" , { xPercent: 430, yPercent: -220 , rotate: 360,	duration:2.5, ease: "ease", }, "<")
			.from(".section-bg-1-cube-3" , { xPercent: -430, yPercent: 220 , rotate: 360,	duration:2.5, ease: "ease", }, "<")
			.from(".section-bg-1-cube-4" , { xPercent: 430, yPercent: 220 , rotate: 360,	duration:2.5, ease: "ease", }, "<")
			.from(".ftc-hero-4-content .title .split-line " , { opacity: 0, transformOrigin: "50% 100%", transform: "rotateX(90deg)", stagger: .5, ease: "elastic.out(1,0.3)", duration: 2.5,  }, )
			.from(".ftc-hero-4-content .btn-wrap " , { opacity: 0, yPercent: 50, ease: "elastic.out(1,0.3)", duration: 2.5,  }, "<=1" )
		
		// hero 5 start 
		gsap.timeline().from(".feh-hero-3-img" , { opacity: 0, y: 400, duration: 2, delay: 1 });

	})

});


function glystickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.txa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('txa_sticky');
      } else {
        $header.removeClass('txa_sticky');
        $header.removeClass('txa_sticky_show');
      }

      if ($header.hasClass('txa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('txa_sticky_show');
        } else {
          $header.removeClass('txa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

glystickyHeader();
  


// mobile-menu-start
if($('.mobile-main-navigation li.dropdown ul').length){
	$('.mobile-main-navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></div>');
	$('.mobile-main-navigation li.dropdown .dropdown-btn').on('click', function() {
		$(this).prev('ul').slideToggle(500);
	});
}

$(".dropdown-btn").on("click", function () {
	$(this).toggleClass("toggle-open");
});


// search-popup-start
$('.search_btn_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});
$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})



// mobile-menu-toggle-start
gsap.registerPlugin(ScrollTrigger);

gsap.config({
	nullTargetWarn: false,
});

var menuToggle = document.getElementById("menuToggle")
var menuToggle2 = document.getElementById("menuToggle2")

if (menuToggle2) {

	var menuBar = gsap.timeline();
	menuBar.reverse();
	var menubgline = gsap.timeline({ paused: true });
	
	menubgline.to('.mobile-menu' , {
		duration: 0,
		display: "block",
		ease: 'Expo.easeInOut'
	});
	menubgline.from('.mobile-menu-bg span' , {
		duration: .5,
		width: 100,
		stagger: 0.1,
		ease: 'Expo.easeInOut'
	});
	menubgline.from('.mobile-menu-logo' , {
		xPercent: -50,
		opacity: 0,
		ease: 'Expo.easeInOut',
		duration: 1,
	});
	menubgline.from('.mobile-menu-close' , {
		duration: 1,
		xPercent: 50,
		rotate: 360,
		ease: 'Expo.easeInOut',
		opacity: 0,

	}, "<");
	
	menubgline.from('.mobile-main-navigation  ul li' , {
		duration: .5,
		opacity: 0,
		y: 50,
		stagger: .01,
	},"<");

	menubgline.from('.mobile-menu-search-bar' , {
		opacity: 0,
		y: 50,
	}, "<.5");

	menubgline.from('.mobile-menu-socail-link' , {
		opacity: 0,
		x: 50,
	});

	
	menubgline.reverse();

	menuToggle.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	menuToggle2.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	
}



// image-paralax-animation-start
gsap.utils.toArray(".image-pllx").forEach(function(container) {
    let image = container.querySelector("img");
  
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
        },
      }); 
      tl.from(image, {
        yPercent: -30,
		scale: 1.1,
        ease: "none",
      }).to(image, {
        yPercent: 30,
		scale: 1.1,
        ease: "none",
      }); 
});

const boxes = gsap.utils.toArray('.ftcfadeup');

boxes.forEach((box, i) => {
  const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none reverse',
    once: false,
  });
});



// class-add
const txaaddclass = gsap.utils.toArray('.ftc-add-class');
txaaddclass.forEach(img => {
	gsap.to(img, {
		scrollTrigger: {
			trigger: img,
			scrub: 1,
			start: "top 95%",
			toggleClass: "active",
			toggleActions: "play reverse play reverse",
			markers: false
		}
	});
});





// hero-1-slider
if($('.kd-hero-1-active').length) {
	let slider = new Swiper('.kd-hero-1-active', {
		loop: true,
		spaceBetween: 0,
		speed: 500,
		rtl: false,
		slidesPerView: 1,
		effect: 'fade',
		autoplay: {
			delay: 5000000,
			},
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: ".kd_hero_1_next",
			prevEl: ".kd_hero_1_prev",
		},
	
	});
	
}


  
// popular-category-1-slider
if($('.kd-pop-cat-1-active').length) {
	let slider = new Swiper('.kd-pop-cat-1-active', {
		loop: true,
		spaceBetween: 40,
		slidesPerView: 4,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".kd_pop_cat_1_next",
			prevEl: ".kd_pop_cat_1_prev",
		},
	
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},


		},
	});
}
  

  
// course-1-slider
if($('.kd-course-1-active').length) {
	let slider = new Swiper('.kd-course-1-active', {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 4,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".kd_course_1_slider_next",
			prevEl: ".kd_course_1_slider_prev",
		},
	
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 4,
			},

		},
	});
}
  


  
// course-1-slider
if($('.kd-testimonial-1-active').length) {
	let slider = new Swiper('.kd-testimonial-1-active', {
		loop: true,
		spaceBetween: 0,
		slidesPerView: 1,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".kd_testimonial_1_slider_next",
			prevEl: ".kd_testimonial_1_slider_prev",
		},


	});
}
  

// video-course-1-slider
if($('.kd-video-course-1-active').length) {
	let slider = new Swiper('.kd-video-course-1-active', {
		loop: true,
		spaceBetween: 35,
		slidesPerView: 2,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".kd_video-course_1_slider_next",
			prevEl: ".kd_video-course_1_slider_prev",
		},


		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},

		},
	});
}
  




  



// bootstrap-toltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

/* faq-active-class */
$(document).on('click', '.gly-accordion-item', function(){
	$(this).addClass('faq_bg').siblings().removeClass('faq_bg')
})


/* back-to-top */
var backtotop = $('.scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	backtotop.addClass('show');
	} else {
	backtotop.removeClass('show');
	}
});

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});


/* counter */
$('.counter').counterUp({
	delay: 10,
	time: 3000
});

/* data-bg-activition */
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})


// wow-activation
if($('.wow').length){
	var wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	}
	);
	wow.init();
};


/*
popup-video-activition
====start====
*/

if($('.popup-video').length) {
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
}


/*
popup-img-activition
====start====
*/

if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

/*
popup-img-activition
====start====
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}

// parallax-img
$('.parallax-img').parallaxie({  
	speed: 0.5,    
});


// gsap.registerPlugin(SplitText);

// var swiper = new Swiper("#post__slider .swiper-container", {
//   effect: "fade",
//   speed: 1000,
//   watchSlidesVisibility: true,
//   autoplay: {
//     delay: 10000,
//     disableOnInteraction: false
//   },
//   allowTouchMove: true,
//   loop: true,
//   runCallbacksOnInit: true,
//   on: {
//     slideChangeTransitionStart: function () {
//       splitTextFunction(this.$el);
//     }
//   }
// });

// function splitTextFunction(sliderDOM) {
//   const slideActive = sliderDOM.find(".swiper-slide-active");
//   const slideCaption = slideActive.find(".swiper__title");
//   const oldActive = sliderDOM.find(".swiper-slide-prev, .swiper-slide-prev");
//   const oldCaption = oldActive.find(".swiper__title");

//   gsap.set(slideCaption, { autoAlpha: 1 });
//   const split = new SplitText(slideActive[0].querySelector("h2"), { type: "words,chars" });
  
//   gsap.from(split.chars, {
//     opacity: 0,
//     y: 50,
//     ease: "back",
//     stagger: {
//       from: "start",
//       each: 0.05
//     },
//     onComplete: function() {
//       split.revert();
//     }
//   });
// }

})(jQuery);