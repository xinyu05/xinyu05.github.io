/**    
 * Author: Almir Pamukovic | http://themeforest.net/user/codenpixel
 * Web site: pamukovic.com
 * Last Update: 24.03.2014
 * Demo url: pamukovic.com/demo/t-one 
 ***/


$(document).ready(function () {
    $('.popup').magnificPopup({
        type: 'image',
        image: {
            verticalFit: false
        }
    });
});

//Portfolio

jQuery('.isotope-item').hover(function () {
        jQuery('.text-work', this).stop().animate({
            'top': '0%',
            opacity: 1
        }, 200);

    },
    function () {
        jQuery('.text-work', this).stop().animate({
            'top': '100%',
            opacity: 0
        }, 200, function () {
            jQuery(this).css('top', '-100%')
        });

    }
);

/**    PORTFOLIO
 *************************************************** **/

var $container = jQuery('#portfolio-container');
$container.isotope({
    filter: '*',
    animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
    },
    layoutMode: 'fitRows'
});

var $container = $('#portfolio-container').imagesLoaded( function() {
  $container.isotope({
    filter: '*',
    animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
    },
    layoutMode: 'fitRows'
  });
});

var $visual_container = jQuery('#visual-portfolio-container');
// $visual_container.isotope({});

var $visual_container = $('#visual-portfolio-container').imagesLoaded( function() {
    $visual_container.isotope();
});

jQuery('.portfolio-categories li a').click(function () {
    jQuery('.portfolio-categories li').removeClass('active');
    jQuery(this).parent().addClass('active');

    var selector = jQuery(this).attr('data-filter');
    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
        layoutMode: 'fitRows'
    });
    return false;
});



jQuery(window).load(function () {
    $container.isotope('reLayout');
});

/**    CAROUSELS AND SLIDERS
 *************************************************** **/

$(document).ready(function () {

    $("#quote").owlCarousel({
        navigation: true, //Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigation: false

    });

});


$(document).ready(function () {
    $('.flexslider').flexslider({
        animationSpeed: 1000,
        directionNav: true,
        controlNav: true,

    });
    $('.project-slide').flexslider({
        animation: "slide"
    });

    $('#ux-projects').click(function(){
        $("body").scrollTo("#portfolio", {duration:400, offsetTop : '50'});
        // $(this).parents('div.section').find('span.message').text( this.title );
        return false;
    });


    // Fade in project when scroll

    $(window).scroll( function(){
    
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 450;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'}, {easing: "easeInCubic"}, 300);
                    
            }
        }); 
    
    });


    // Scroll to projects 
    $("#point-to-first-project").click(function(event){
        event.preventDefault();
        console.log("yes");
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 500, 'easeInOutCirc');
    });
   
    $("#ux-projects").click(function(event){
        event.preventDefault();
        console.log("yes");
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 500, 'easeInOutCirc');
    });



    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);

    switch (filename) {
        case "myfab5.php":
            $(".footer-nav .col-sm-1:nth-child(1) .pj-name").addClass("current");
            break;
        case "whirlpool.php":
            $(".footer-nav .col-sm-1:nth-child(2) .pj-name").addClass("current");
            break;
        case "wecollabrify.php":
            $(".footer-nav .col-sm-1:nth-child(3) .pj-name").addClass("current");
            break;
        case "daya.php":
            $(".footer-nav .col-sm-1:nth-child(4) .pj-name").addClass("current");
            break;
        case "snowferret.php":
            $(".footer-nav .col-sm-1:nth-child(5) .pj-name").addClass("current");
            break;
        case "sportspal.php":
            $(".footer-nav .col-sm-1:nth-child(6) .pj-name").addClass("current");
            break;
        case "mcrunch.php":
            $(".footer-nav .col-sm-1:nth-child(7) .pj-name").addClass("current");
            break;
        case "tenki.php":
            $(".footer-nav .col-sm-1:nth-child(8) .pj-name").addClass("current");
            break;
        default:
            break;
    }

    if ($(".footer-nav .current").parents(".col-sm-1").prev().length > 0) {
        var prev_url = $(".footer-nav .current").parents(".col-sm-1").prev().find("a").attr("href");
        $(".footer-nav .actions .prev-next .prev").attr("href", prev_url);
    };

    if ($(".footer-nav .current").parents(".col-sm-1").next().length > 0) {
        var next_url = $(".footer-nav .current").parents(".col-sm-1").next().find("a").attr("href");
        $(".footer-nav .actions .prev-next .next").attr("href", next_url);
    }

    $(".navbar-fixed-top").autoHidingNavbar({});


    function verifyPassword() {
        if ($("#ka-password").val() == "panda") {
            // console.log("yes");
            $(".hidden-content").show();
            $(".password-request-form").hide();
            // $(".wrapper").css("padding-bottom", "192px");
            $("#ka-mobile-sap-nav").appendTo('.wrapper');
        } else {
            $(".password-failed").show();
        }
    }

    $("#ka-password-submit").click(function(e){
        e.preventDefault();
        verifyPassword();
    });

    $(".password-request-form").submit(function(e){
        e.preventDefault();
        verifyPassword();
        console.log("submit");
    });

});

$(document).ready(function () {

    $(".project-bg-1 .text-wrapper").click(function(){
        window.location.href = "sat.php";
    });

    $(".project-bg-2 .text-wrapper").click(function(){
        window.location.href = "ka-mobile.php";
    });


    $(".project-bg-3 .text-wrapper").click(function(){
        window.location.href = "sap.php";
    });

    $(".project-bg-4 .text-wrapper").click(function(){
        window.location.href = "myfab5.php";
    });

    $(".project-bg-5 .text-wrapper").click(function(){
        window.location.href = "wecollabrify.php";
    });

    $(".project-bg-6 .text-wrapper").click(function(){
        window.location.href = "daya.php";
    });

});

$(document).ready(function () {


  /**    ONE PAGE NAV
 *************************************************** **/

    // jQuery('#index-nav').onePageNav({
    //     scrollSpeed: 1000,
    //     changeHash: true,
    //     filter: ':not(.external)'
    // });

    jQuery('#top-nav, #top-nav-2, a.go-up').onePageNav({
        scrollSpeed: 1000,
        changeHash: true,
        filter: ':not(.external)'
    });

});


/**   CLOSE MOBILE NAV AFTER CLICK
 *************************************************** **/

(function($) {
  "use strict";

jQuery.fn.exists = function() {
                  return this.length > 0;
              }

    $(function() {
                var navMain = $(".navbar-collapse");
                navMain.on("click", "a", null, function() {
                    if ($(this).attr("href") !== "#") {
                        navMain.collapse('hide');
                    }
                });

                $("#wrapper").bind("click", function() {
                     if ($(".navbar-collapse.navbar-ex1-collapse.in").exists()) {
                        navMain.collapse('hide');
                    }
                });

            });

})(jQuery);



    /**    SEND EMAILS
 *************************************************** **/

    $('#contactform').submit(function () {

        var action = $(this).attr('action');

        $("#message").slideUp(750, function () {
            $('#message').hide();

            $('#submit')
                .after('<img src="images/loader.gif" class="loader" />')
                .attr('disabled', 'disabled');

            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    subject: $('#subject').val(),
                    comments: $('#comments').val(),
                    verify: $('#verify').val()
                },
                function (data) {
                    document.getElementById('message').innerHTML = data;
                    $('#message').slideDown('slow');
                    $('#contactform img.loader').fadeOut('slow', function () {
                        $(this).remove()
                    });
                    $('#submit').removeAttr('disabled');
                    if (data.match('success') != null) $('#contactform').slideUp('slow');

                }
            );

        });

        return false;

    });


// Back to top
jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        console.log("yes");
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

});


