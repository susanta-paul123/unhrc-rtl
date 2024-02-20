(function ($) {
    'use strict';

    AOS.init({
        once: true,
    });

    var a = 0;
    $(window).scroll(function () {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 150) {
            sticky.addClass('sticky-nav');
            $("body").addClass("scrollingheader");
        }else {
            sticky.removeClass('sticky-nav');
            $("body").removeClass("scrollingheader");
        }
   });

    jQuery(document).ready(function ($) {
        var mydir = $("html").attr("lang");

        if (mydir == 'ar') {
            var rtlVal = true
        } else {
            var rtlVal = false
        }

        $('.home-slider .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            rtl: rtlVal,
            // autoplay: true,
            animateIn: 'animate__fadeIn',
            animateOut: 'animate__fadeOut',
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            autoplayHoverPause: true,
            nav: false,
            items: 1,
        });

        //
        $('.testimonial .owl-carousel').owlCarousel({
            rtl: rtlVal,
            loop:true,
            margin:30,
            nav:true,
            autoplay:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                }
            }
        })


        $('.p-logos .owl-carousel').owlCarousel({
            rtl: rtlVal,
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            dots:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                }, 
                1000:{
                    items:6
                }
            }
        })

        $('.e-logos .owl-carousel').owlCarousel({
            rtl: rtlVal,
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            dots:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                }, 
                1000:{
                    items:6
                }
            }
        })

        //

        
        $('.navtabb .owl-carousel').owlCarousel({
            rtl: rtlVal,
            loop:false,
            margin:10,
            nav:true,
            autoplay:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                }, 
                1000:{
                    items:4
                }
            }
        })

        //

        $('.ot-carousel .owl-carousel').owlCarousel({
            rtl: rtlVal,
            loop:false,
            margin:40,
            nav:true,
            autoplay:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                }, 
                1000:{
                    items:3
                }
            }
        })

        //
        

        $('.link-carusel1 .owl-carousel').owlCarousel({
            rtl: rtlVal,
            loop:false,
            margin:40,
            nav:true,
            autoplay:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                }, 
                1000:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        })



        //

       
        $(".scroll-down").on('click',function() {
            $('html, body').animate({
                'scrollTop' : ($("#test").position().top - 100)
            });
        });


        //
        // $('.region-toggle').on('click', function(){
        //     $(this).toggleClass('open')
        //     $('.site-region').fadeToggle();
        //     $('html').toggleClass('overflow-hidden');
        // })
        // $('.site-region-close').on('click', function(){
        //     $('.site-region').fadeOut();
        //     $('html').removeClass('overflow-hidden');
        // })



        //Resource Areas
        // $('.content').hide();
        // $('.content').eq(1).show();
        // $('.head').eq(0).addClass('active');

        // $('.head').click(function(){
        //     $(this).parent('.block').siblings('.block').children('.content').slideUp();
        //     $(this).siblings('.head').next().slideUp();
        //     $(this).parent('.block').siblings('.block').children('.head').removeClass('active');
        //     $(this).toggleClass('active');
        //     $(this).next('.content').slideToggle();
        // });




        //time line active when scroll
        
        // $(window).scroll(function () {
        //     $('.obd-list-item .column .bod-row').each(function() {
        //           var distance = $(this).offset().top - 350;
        //           if ($(window).scrollTop() >= distance) {
        //             $(this).addClass('active');
        //           } else {
        //             $(this).removeClass('active');
        //           }
        //         });
        
        // });

        // $("#phone").intlTelInput({});

        //

        // $("#scrollH").mCustomScrollbar({
        //     axis:"x",
        //     advanced:{autoExpandHorizontalScroll:true}
        // });
        // $("#scrollH2").mCustomScrollbar({
        //     axis:"x",
        //     advanced:{autoExpandHorizontalScroll:true}
        // });

        //

        function videoTrigger() {
            var trigger = $('.video-trigger');
            if (!trigger.length) return;
            trigger.fancybox();
        }
        videoTrigger();

        //

        $('.sdtab').click(function(){
            $('.sdtab').removeClass('current')
            $(this).addClass('current')
            var dm= $(this).attr('data-m');
            console.log(dm)
            $('.sdtab-pane').hide();
            $('#' + dm).show();
        })

        //

        $('.sidebar-toggle').on('click', function(){
            $('.sidebar-menu').toggleClass('open');
        })
        $('.sb-close').on('click', function(){
            $('.sidebar-menu').removeClass('open');
        })

        $("ul.side-menu li:has(ul)").prepend('<span class="down"></span>');

        $('.drop-down').click(function() {
            $(this).toggleClass('up');
            $(this).children('ul').delay(20).slideToggle(200);
        })



        // $('ul.side-menu li span.down').click(function() {
            
        //     $(this).toggleClass('up');
        //     $(this).siblings('ul').delay(20).slideToggle(200);
        //     $(this).parents('li').siblings('li').children('ul').slideUp();
        //     $(this).siblings('ul').children('li').children('ul').slideUp();
        //     $(this).parents('li').siblings('li').children('span').removeClass('up');
        //     $(this).siblings('ul').children('li').children('span').removeClass('up');
        // });




        
    });

    $(window).resize(function(){
        if($(window).width() <= 991){
            $('.top-header-toggle').on('click', function(){
                $(this).toggleClass('active');
                $('.header-top').toggleClass('open');
            })

        }else{
            // $( ".header-right" ).prependTo( ".header-right-wrap" );

        }
     })

    


    //


if($(window).width() <= 991){
    // $( ".header-right" ).appendTo( ".navbar-collapse" );
}else{
   
}
if($(window).width() <= 767){
    $('.top-header-toggle').on('click', function(){
        $(this).toggleClass('active');
        $('.header-top').toggleClass('open');
    })
}else{
   
}

//
$('.tabs ul li').click(function(){
    $('.tabs ul li').removeClass('active')
    $(this).addClass('active')
    var da= $(this).attr('data-tab');
    console.log(da)
    $('.item').hide();
    $('#' + da).show();
  })

  //

    $('.ab').hide();
    $('.ab').eq(0).show();
    $('.ah').eq(0).addClass('active');

    $('.ah').click(function(){
        $(this).parent('.faqrow').siblings('.faqrow').children('.ab').slideUp();
        $(this).siblings('.ah').next().slideUp();
        $(this).parent('.faqrow').siblings('.faqrow').children('.ah').removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.ab').slideToggle();
    });


}(jQuery));



