
$(function(){
// Preloader js    
$(window).on('load', function(){
  $('.preloader').delay(1000).fadeOut(500); 
});

    // bact_to_top

    $('.bact_to_top'). click (function(){
      $('html, body'). animate ({scrollTop:0}, 1500)
    });

    $(window).scroll(function(){
      var scrolling = $(this). scrollTop();
      if(scrolling > 200){
        $('.bact_to_top').fadeIn(500);
      }
      else{
        $('.bact_to_top').fadeOut(500);
      }
      if(scrolling > 200){
        $('.navbar_main').addClass('background');
      }
      else{
        $('.navbar_main').removeClass('background');
      }

    });

  //testimonial
  $('.testimunial_main').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:true,
    prevArrow:'.left',
    nextArrow:'.right',

  });

  // work 
    var containerEl = document.querySelector('.work-main');
  
    var mixer = mixitup(containerEl);
    
  
  let navbar = document.querySelector("#header");
  let searchBox = document.querySelector(".search-box .search");
  
  searchBox.addEventListener("click", ()=>{
    navbar.classlist.toggle("showInput");
  });


// about
new VenoBox({
  selector: ".my-link"
});

 



	$(".typed").typed({
		strings: ["Font-End Developer.", "Responsive wev Desinger.",],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});


 
//    $('.banner_slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplaySpeed: 3000,
//     speed:2500,
//     arrows:false,
//     autoplay: true,
//     fade:true,
//     dots: true,
//     fade:true,
    
// });




// new WOW().init();

    // counterup
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1500,
    // });

    // new WOW().init();


    //project 
    // $('.project_main').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplaySpeed: 1500,
    //     speed:1500,
    //     arrows: false,
    //     responsive: [
    //       {
    //         breakpoint: 576,
    //         settings: {
    //           slidesToShow: 1,
    //         }
    //       },
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 2,
    //         }
    //       },
    //       {
    //         breakpoint: 922,
    //         settings: {
    //           slidesToShow: 2,
    //         }
    //       },
    //       {
    //         breakpoint: 1200,
    //         settings: {
    //           slidesToShow: 3,
    //         }
    //       }

    //     ]
    // });

// brand part

    //  $('.brand_main').slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     arrows: false,
    //     responsive: [
    //       {
    //         breakpoint: 576,
    //         settings: {
    //           slidesToShow: 1,
    //         }
    //       },
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 2,
    //         }
    //       },
    //       {
    //         breakpoint: 922,
    //         settings: {
    //           slidesToShow: 3,
    //         }
    //       },
    //       {
    //         breakpoint: 1200,
    //         settings: {
    //           slidesToShow: 4,
    //         }
    //       }

    //     ]
    //   });

      //banner_sun 
  //   $('.banner3_slider').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     speed:1500,
  //     autoplaySpeed: 1500,
  //     autoplay: true,
  //     arrows: false,
  // });
    // // blog 
    // $('.blog_main').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     arrows: false,
       

    //   });


      // bact_to_top

      // $('.bact_to_top'). click (function(){
      //   $('html, body'). animate ({scrollTop:0}, 1000)
      // });

      // $(window).scroll(function(){
      //   var scrolling = $(this). scrollTop();
      //   if(scrolling > 200){
      //     $('.bact_to_top').fadeIn(500);
      //   }
      //   else{
      //     $('.bact_to_top').fadeOut(500);
      //   }
      //   if(scrolling > 200){
      //     $('.nav_main').addClass('background');
      //   }
      //   else{
      //     $('.nav_main').removeClass('background');
      //   }

      // });

});