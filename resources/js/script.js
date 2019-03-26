$(document).ready(function() {
    //-----------------------------
    //Waypoints - sticky navigation
    //-----------------------------
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            //when user scrolls down - add class .sticky to 'nav' element
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    //-----------------
    //Scroll on buttons
    //-----------------
    //1st button
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500);
    });
    //2nd button
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1500);
    });    
    //-----------------
    //Navigation scroll
    //-----------------    
    // select all links with hashes
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
    
    //-----------------
    //Animate.css
    //-----------------
    //Animations on scroll
    //1st
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    //2nd
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    //3th
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    //4th
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });    

    //Mobile nav
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        //slideToggle - to open and close a navigation
        nav.slideToggle(200);
        //change menu icon to X
        if (icon.hasClass('ion-ios-list')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-ios-list');
        } else {
            icon.addClass('ion-ios-list');
            icon.removeClass('ion-md-close');            
        }
    });
    
});
