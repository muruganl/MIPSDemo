! function(e) {
    "use strict";

    function a() {
        t(), i(), s(), l(), n(), r(), o(), d(), g(), v(), m(), f(), p(), c()
    }

    function t() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? !1 : !0
    }

    function i() {
        e("body").queryLoader2({
            barColor: "#0099E6",
            backgroundColor: "#fff",
            percentage: !0,
            barHeight: 3,
            completeAnimation: "grow",
            minimumTime: 1e3,
            fadeOutTime: 1e3
        });
        var a = e("header#header .logo").find("img").attr("src"),
            t = e("#qLoverlay");
        t.prepend('<img src="' + a + '" class="logo-loader" alt="loader">')
    }

    function s() {}

    function l() {
        var a = e(".navigation"),
            i = (a.find(".navigation-inner"), a.find(".nav"), 2 * e("#page-wrap").css("marginTop").split("px")[0]),
            s = e(window).height() - i,
            l = e(window).width() - i;
        if (e(".banner, .not-found").height(s), e(".pageslider").find(".full-height").innerHeight(s), a.css({
                width: l,
                height: s
            }), e(".page-boxed").length) {
            var n = e(".page-boxed").offset().left;
            e(".navigation.nav-right").css("right", n)
        }
        t() ? e(".team-item").removeClass("team-item-mobile") : e(".team-item").addClass("team-item-mobile")
    }

    function n() {
        {
            var a = e(".navigation"),
                t = (a.find(".navigation-inner"), a.find(".nav")),
                i = (e(".navigation.nav-fullscreen"), e(".navigation.nav-right"), e(".navigation.nav-left")),
                s = e(".navigation.nav-top"),
                l = e(".navigation.nav-right, .navigation.nav-left"),
                n = e(".navigation.nav-right, .navigation.nav-left, .navigation.nav-top");
            e(".navigation.nav-right .navigation-inner, .navigation.nav-left .navigation-inner")
        }
        l.prependTo("#page-wrap"), s.prependTo("#page-wrap"), e(".navigation.nav-right .navigation-inner").prepend('<div class="bg-nav"></div>'), e(".open-nav").on("click", function() {
            return a.toggleClass("nav-anim"), n.css("zIndex", "99999"), !1
        }), e(".close-nav").on("click", function() {
            return a.removeClass("nav-anim"), n.css("zIndex", "999"), a.find(".sub-menu").slideUp(300), !1
        }), a.on("click", function(e) {
            e.stopPropagation()
        }), e("html").on("click", function() {
            a.removeClass("nav-anim"), n.css("zIndex", "999"), a.find(".sub-menu").slideUp(300)
        }), e(".navigation.nav-left").closest("#page-wrap").find(".open-nav").css({
            right: "auto",
            left: "20px"
        }), i.closest("#page-wrap").find(".shop-cart").css("right", "36px");
        var r = a.find(".sub-menu");
        r.hide(), r.parent("li").on("click", "> a", function() {
            return 0 == e(this).parent().hasClass("f") && t.find(".sub-menu").stop().removeClass("f").slideUp(300), e(this).siblings(".sub-menu").stop().addClass("f").slideToggle(300), !1
        }), e(".road-title").css({
            "padding-left": "15px",
            "padding-right": "15px"
        }), e('[class^="container"]').find(".road-title").css({
            "padding-left": "0",
            "padding-right": "0"
        }), e(window).scroll(function() {
            var a = e(window).scrollTop(),
                t = e(window).scrollTop() / 4,
                i = e(window).height();
            e(".banner-content h1").css({
                "-webkit-transform": "translateY(-" + a + "px)",
                "-moz-transform": "translateY(-" + a + "px)",
                "-ms-transform": "translateY(-" + a + "px)",
                "-o-transform": "translateY(-" + a + "px)",
                transform: "translateY(-" + a + "px)"
            }), e(".r-scroll-down").css({
                "-webkit-transform": "translate( -50%, -" + t + "px)",
                "-moz-transform": "translate( -50%, -" + t + "px)",
                "-ms-transform": "translate( -50%, -" + t + "px)",
                "-o-transform": "translate( -50%, -" + t + "px)",
                transform: "translate( -50%, -" + t + "px)"
            }), a > i && e(".banner-content h1, .r-scroll-down").css({
                "-webkit-transform": "translateY(0)",
                "-moz-transform": "translateY(0)",
                "-ms-transform": "translateY(0)",
                "-o-transform": "translateY(0)",
                transform: "translateY(0)"
            })
        }), e(".page-share").on("click", ".toggle-share", function() {
            e(this).toggleClass("toggle-share-anim"), e(".page-share").find(".shares").toggleClass("shares-anim")
        }), e(".nav-left").closest("#page-wrap").find(".page-share").css("left", "62px")
    }

    function r() {
        e("select").length && e.each(e("select"), function() {
            var a = e(this).find("option:selected").text();
            e(this).wrap('<div class="select-custom"></div>').css({
                "z-index": 10,
                opacity: 0,
                "-khtml-appearance": "none"
            }).after('<span class="select">' + a + '</span><i class="fa fa-angle-down"></i>').change(function() {
                var a = e("option:selected", this).text();
                e(this).next().text(a)
            })
        })
    }

    function o() {
        e(window).scroll(function() {
            if (e(".skill-progress").length) {
                var a = e(window).height(),
                    i = e(window).scrollTop(),
                    s = e(".skillbar").offset().top,
                    l = e(".skill-progress").height();
                a + i > s && s + l > i && (e(".skillbar").find(".skillbar-inner").addClass("skillbar-run"), e.each(e(".skillbar"), function() {
                    var a = e(this).find(".percent"),
                        i = a.text(),
                        s = e(this).data("duration"),
                        l = e(this).data("easing");
                    t() ? a.parent(".skillbar-run").css({
                        width: i,
                        "-webkit-transition": "all " + s + " " + l,
                        "-moz-transition": "all " + s + " " + l,
                        "-ms-transition": "all " + s + " " + l,
                        "-o-transition": "all " + s + " " + l,
                        transition: "all " + s + " " + l
                    }) : a.parent(".skillbar-run").css({
                        width: i,
                        "-webkit-transition": "none",
                        "-moz-transition": "none",
                        "-ms-transition": "none",
                        "-o-transition": "none",
                        transition: "none"
                    })
                }))
            }
        })
    }

    function d() {
        e(".r-scroll-down").click(function() {
            var a = e(this).closest(".section").next();
            return e("html,body").animate({
                scrollTop: a.offset().top
            }, 800, "easeInOutExpo"), !1
        }), e(".scroll-top").on("click", function() {
            e("html, body").stop().animate({
                scrollTop: 0
            }, 800, "easeInOutExpo")
        }), e(".scroll-work").on("click", function() {
            return e("html,body").animate({
                scrollTop: e("#ourwork").offset().top
            }, 800, "easeInOutExpo"), !1
        })
    }

    function g() {}

    function f() {}

    function p() {
        e(".fittext").length && e(".fittext").fitText(1.5, {
            minFontSize: "20px",
            maxFontSize: "60px"
        }), e(".typer").length && e("[data-typer-targets]").typer({
            highlightSpeed: 20,
            typeSpeed: 100,
            clearDelay: 500,
            typeDelay: 200,
            clearOnHighlight: !0,
            typerDataAttr: "data-typer-targets",
            typerInterval: 2e3
        }), t() && e("html").niceScroll({
            scrollspeed: 15,
            mousescrollstep: 25,
            cursorborder: 0,
            cursorcolor: "#0099E6",
            cursoropacitymin: "visible",
            cursorwidth: 20,
            cursorfixedheight: 20,
            cursorborderradius: 20
        }), e(".blog-feature-slider").length && e(".blog-feature-slider").owlCarousel({
            autoPlay: 2e4,
            slideSpeed: 1e3,
            navigation: !1,
            pagination: !0,
            singleItem: !0,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
        }), e(".team-slider").length && e(".team-slider").owlCarousel({
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [992, 2],
            itemsTablet: [767, 2],
            itemsTabletSmall: [600, 1],
            slideSpeed: 200,
            navigation: !0,
            pagination: !1,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
        }), e(".what-we-do-slider").length && e(".what-we-do-slider").owlCarousel({
            items: 2,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [992, 2],
            itemsTablet: [767, 1],
            itemsTabletSmall: [600, 1],
            slideSpeed: 300,
            navigation: !1,
            pagination: !0,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
        }), e(".client-slider").length && e(".client-slider").owlCarousel({
            autoPlay: 1e4,
            items: 5,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [992, 4],
            itemsTablet: [767, 3],
            itemsTabletSmall: [600, 2],
            slideSpeed: 300,
            navigation: !0,
            pagination: !1,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
        }), e(".client-slider-2").length && e(".client-slider-2").owlCarousel({
            autoPlay: 1e4,
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [992, 3],
            itemsTablet: [767, 3],
            itemsTabletSmall: [600, 2],
            slideSpeed: 300,
            navigation: !0,
            pagination: !1,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
        }), e(".test-slider").length && e(".test-slider").owlCarousel({
            autoPlay: 2e4,
            slideSpeed: 1e3,
            navigation: !1,
            pagination: !0,
            singleItem: !0,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
        }), e(".cart-toggle").on("click", function() {
            e(this).siblings(".view-shop-cart-block").slideToggle(150)
        }), e(".shop-cart").on("click", function(e) {

            e.stopPropagation()
        }), e("html").on("click", function() {
            e(".view-shop-cart-block").slideUp(150)
        })
    }

    function c() {}

    function m() {}

    function u() {
        e(".parent-content").length && e(".parent-content").each(function() {
            if (e(window).width() > 992) {
                var a = e(this).height();
                e(this).find(".middle-title").css({
                    height: a
                })
            } else e(".middle-title").css({
                height: "auto"
            })
        })
    }

    function h() {
        t() && (e(".banner .awe-parallax").parallax("50%", .2), e(".our-team .awe-parallax").parallax("50%", .2), e(".bg-work-1.awe-parallax").parallax("50%", .2), e(".bg-work-2.awe-parallax").parallax("50%", .2), e(".bg-about.awe-parallax").parallax("50%", .2), e(".testimonials .awe-parallax").parallax("50%", .2))
    }

    function v() {
        e.each(e("[data-hover]"), function() {
            var a = e(this).data("hover");
            e(this).children().addClass("animated"), e(this).hover(function() {
                e(this).children().addClass(a)
            }, function() {
                e(this).children().removeClass(a)
            })
        })
    }
    e(document).ready(function() {
        a(), e(window).on("load", function() {
            e("#page-wrap").removeClass("opacity"), e(".pageslider").closest("html").getNiceScroll().hide(), e(".feature-work-slider, .feature-post-slider-wrap").innerWidth(e(".pageslider").width()), m(), h(), u()
        }), e(window).on("resize", function() {
            e(window).width() <= 1100 ? e(".navigation.nav-top").addClass("nav-fullscreen nf").removeClass("nav-top") : e(".navigation.nav-fullscreen").hasClass("nf") && e(".navigation.nav-fullscreen").addClass("nav-top").removeClass("nav-fullscreen nf"), l(), u()
        }), e(window).on("resize", function() {
            e(".feature-work-slider, .feature-post-slider-wrap").innerWidth(e(".pageslider").width())
        }).trigger("resize")
    })
}(jQuery);

// Chart
/* <3 
http://html5.litten.com/graphing-data-in-the-html5-canvas-element-part-iv-simple-pie-charts/
*/
$('.icon-tabs  li a').hover(function() {
        $(this).tab('show');
    });

// chat
$(function(){
    $(".chat").niceScroll();
})
// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
	$('.callchat a').tooltip();
