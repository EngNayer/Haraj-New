/// loading website

jQuery(window).load(function () {

    // PAGE LOADER

    $(".loader").fadeOut(500,function(){

        $(".loading").delay(1000).fadeOut(500);

        $("body").css("overflow-y", "auto");

    });


    // ANIMATION

    Animate_box();
    $(document).scroll(function (){
        Animate_box();
    });

    function Animate_box() {
        var scroll_var = $(this).scrollTop();

        $('.animate-box').each(function (){
            var val_one = $(this).offset().top - $(window).height() + 80;

            if (scroll_var > val_one){
                if($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                }else if($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                }else {
                    $(this).addClass('animated fadeInUp');
                }
            }
        });
    }

});

// ADD IMAGE
$('.image-uploader').change(function (event) {
    for (var one = 0; one < event.target.files.length; one++) {
        $(this).parents('.images-upload-block').find('.upload-area').append('<div class="uploaded-block" data-count-order="' + one + '"><img src="' + URL.createObjectURL(event.target.files[one]) + '"><button class="close">&times;</button></div>');
    }
});

// REMOVE IMAGE
$('.images-upload-block').on('click', '.close',function (){
    $(this).parents('.uploaded-block').remove();
});

// // ADD IMAGE
// $('.image-uploader').change(function (event){
//     $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close"><i class="fas fa-times"></i></button></div>');
// });
//
// // REMOVE IMAGE
// $('.images-upload-block').on('click', '.close',function (){
//     $(this).parents('.uploaded-block').remove();
// });

/// scrooltop nav-bar

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // downscroll code
        $('.Tab_mobile ul').addClass('fading_scroll');
    } else {
        // upscroll code
        $('.Tab_mobile ul').removeClass('fading_scroll');
    }
    lastScrollTop = st;
});

/// Remove Disable

$(".edit_profile").click(function(){
    $('.form_input input , .form_input select').removeAttr("disabled")
});

/// Show And Hide Password

$(".toggle-password").click(function() {
    $('.toggle-password i').toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

/// Click Favorite

$(".btn_favorite").on("click", function () {
    $(this).parents('.favorite_event').find(".btn_favorite i").toggleClass("far fa-star fas fa-star");
});

/// Click Remove Blcok

$('.remove').on("click", function () {
    $(this).parents('.blcok_group').addClass("remove_block");
});

/// Input File Upload

$('#file-upload').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
});

/// Scrool Nav

$('#nav-icon3').click(function(){
    $('#nav-icon3').addClass('open');
    $(".Nav_Mobile").addClass('back');
    $(".overlay").addClass('back');
    $("body").css("overflow-y", "hidden");
});

$('.category').click(function(){
    $(".mune_category").addClass('back');
    $(".over_category").addClass('back');
    $("body").css("overflow-y", "hidden");
});

$('.over_category').click(function(){
    $(".mune_category").removeClass('back');
    $(".over_category").removeClass('back');
    $("body").css("overflow-y", "auto");
    $('.sub-menu ul').slideUp('100');
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

$('.overlay').click(function(){
    $('#nav-icon3').removeClass('open');
    $(".Nav_Mobile").removeClass('back');
    $(".search").removeClass('fading_mobile');
    $(".block_footer").removeClass('fading_mobile');
    $(".overlay").removeClass('back');
    $("body").css("overflow-y", "auto");
});

/// Click Mune Category

$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

$(".title_category").click(function () {
    $(this).parent(".up_category").children(".choose_category").slideToggle("100");
    $(this).find(".plus").toggleClass("fas fa-plus fas fa-minus");
});

$('#file-upload').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
});

/// Open Form Search

$('.open_search').click(function(){
    $(".search").addClass('fading_mobile');
    $(".overlay").addClass('back');
});

/// Open Social_Media

$('.open_social a').click(function(event){
    event.preventDefault();
    $('#nav-icon3').removeClass('open');
    $(".Nav_Mobile").removeClass('back');
    $(".block_footer").addClass('fading_mobile');
});

$(document).ready(function() {
    $('.modal').on('shown.bs.modal', function() {

        var h = $(this).find(".bg-login").height();

        $(".bg-coming").css("height", h+19);

        var k = $(this).find(".bg-coming").height();

        $(".bg-login").css("height", k);

    })
});

$('.remove-block').on("click", function (e) {
    e.preventDefault();
    $(this).parents('.section-notifiction').fadeOut(100);
});


// IMAGE PARALLAX

var mouseXPercent = 0, myX = 0, myX2 = 0;

$('.Header').mousemove(function (e) {
    var offset = $(this).offset();
    var xPos = e.pageX - offset.left;
    var xWidth = $(window).width() / 2;

    mouseXPercent = (xPos - xWidth) / 2;

    myX = mouseXPercent / 10;
    $('.layer-empty').css({'right': - myX});

});

//// add slider

$('#owl_home').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    autoplay:true,
    autoplayTimeout: 2000,
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    pagination : true,
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#owl_2').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    autoplay:true,
    autoplayTimeout: 2000,
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    pagination : true,
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
              ],
    responsive:{
        0:{
            items:3
        },
        900:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('#sync1').owlCarousel({
    items:1,
    loop:false,
    center:true,
    autoplay:true,
    margin:10,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ],
    animateOut: 'fadeOut',
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
});

$('#sync2').owlCarousel({
    items:4,
    loop:false,
    center:false,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ]
});



