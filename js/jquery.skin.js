/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(e,t,n){function i(e){return e}function s(e){return decodeURIComponent(e.replace(r," "))}var r=/\+/g;var o=e.cookie=function(r,u,a){if(u!==n){a=e.extend({},o.defaults,a);if(u===null){a.expires=-1}if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setDate(l.getDate()+f)}u=o.json?JSON.stringify(u):String(u);return t.cookie=[encodeURIComponent(r),"=",o.raw?u:encodeURIComponent(u),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=o.raw?i:s;var h=t.cookie.split("; ");for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");if(c(v.shift())===r){var m=c(v.join("="));return o.json?JSON.parse(m):m}}return null};o.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)!==null){e.cookie(t,null,n);return true}return false}})(jQuery,document)


jQuery(document).ready(function($) {
    $('#style-option .button').on('click', function() {
       $('#style-option').toggleClass('style-option-toggle');
    });
    // $(window).scroll(function() {
    //     var aaa = $(window).scrollTop();
    //     $('#style-option').css('marginTop', aaa);
    // });
    //Change color skin
    function checkCSS(){
        var _css = $.cookie('css');

        if ((_css != null) && (_css != 'pink')) {
            $('#color-style').attr({href : 'css/colors/'+ _css + '.css'});
            $(".logo img").attr("src","images/logo-"+_css+".png");
        } else {
            $(".logo img").attr("src","images/logo.png");
        }
    }
    checkCSS();
    $('.color').on('click', function(e){
        e.preventDefault();
        style = $(this).attr('data-href');
        $('#color-style').attr({href : 'css/colors/'+ style + '.css'});
        if (style != 'pink') {
            $(".logo img, .logo-nav img").attr("src","images/logo-"+style+".png");
        } else {
            $(".logo img, .logo-nav img").attr("src","images/logo.png");
        }
        $.cookie('css', style);
    });


    if ($.cookie('page')) {
        $('#page-wrap')
            .removeClass('page-fullscreen page-boxed')
            .addClass($.cookie('page'));
        $('.layout-style').val($.cookie('page'));
    }
    $('.layout-style').on('change', function() {
        var valst = $(this).val();
        $.cookie('page', valst);
        $('#page-wrap')
            .removeClass('page-fullscreen page-boxed')
            .addClass(valst);
        var timeout = setTimeout("location.reload(true);",50);
        function resetTimeout() {
            clearTimeout(timeout);
            timeout = setTimeout("location.reload(true);",50);
        }
    });

    if ($.cookie('nav')) {
        $('.navigation')
            .removeClass('nav-fullscreen nav-top nav-right nav-left')
            .addClass($.cookie('nav'));   
        $('.nav-style').val($.cookie('nav')); 
    }
    $('.nav-style').on('change', function() {
        var valst2 = $(this).val();
        $.cookie('nav', valst2);
        $('.navigation')
            .removeClass('nav-fullscreen nav-top nav-right nav-left')
            .addClass(valst2);
        var timeout = setTimeout("location.reload(true);",50);
        function resetTimeout() {
            clearTimeout(timeout);
            timeout = setTimeout("location.reload(true);",50);
        }
    });

    if ($.cookie('map')) {
        $('#map')
            .attr('data-snazzy-map-theme', $.cookie('map'));
        $('.map-style').val($.cookie('map'));
    }
    $('.map-style').on('change', function() {
        var valst3 = $(this).val();
        $.cookie('map', valst3);
        $('#map')
        .attr('data-snazzy-map-theme', valst3);
        var timeout = setTimeout("location.reload(true);",50);
        function resetTimeout() {
            clearTimeout(timeout);
            timeout = setTimeout("location.reload(true);",50);
        }
    });
    $('body')
        .removeClass('pattern1 pattern2 pattern3 pattern4')
        .addClass($.cookie('pattern'));
    $('.pattern-setting').on('click', 'a', function(e) {
        e.preventDefault();
        var bg = $(this).attr('class');
        $(this)
            .closest('body')
                .removeClass('pattern1 pattern2 pattern3 pattern4')
                .addClass(bg);
        $.cookie('pattern', bg);
    });
});