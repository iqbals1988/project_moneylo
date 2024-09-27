$(function () {
  let active_index = 0;
  function activeTabs() {
      $($("#tabs").find("li")[active_index]).siblings().removeClass("active"), $($("#tabs").find("li")[active_index]).addClass("active");
      let index = $($("#tabs").find("li")[active_index]).attr("data-index"),
          target = $($("#tabs").find("li")[active_index]).find("span").attr("href");
      $(target).siblings().addClass("hide"), $(target).removeClass("hide"), active_index > $("#tabs").find("li").length - 1 ? (active_index = 0) : (active_index += 1);
  }
  setInterval(activeTabs, 1500),
      $(document).on("click", "#tabs li", function () {
          $(this).siblings().removeClass("active"), $(this).addClass("active");
          let index = $(this).attr("data-index");
          console.log(index, "index");
          let target = $(this).find("span").attr("href");
          $(target).siblings().addClass("hide"), $(target).removeClass("hide"), (active_index = parseInt(index)), console.log(index, " = index = ", active_index), (active_index = 4 * parseInt(index));
      });
}),
$(".loan_accordion > li > .answer").hide();
$(".loan_accordion > li").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active").find(".answer").slideUp();
  } else {
    $(".loan_accordion > li.active .answer").slideUp();
    $(".loan_accordion > li.active").removeClass("active");
    $(this).addClass("active").find(".answer").slideDown();
  }
  return !1;
});

$(".clickme a").click(function(){$(".clickme a").removeClass("activelink");$(this).addClass("activelink");var tagid=$(this).data("tag");$(".blog_list_part").removeClass("active_part").addClass("hide");$("#"+tagid).addClass("active_part").removeClass("hide")});

$(".business_slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: !1,
  dots: !0,
  speed: 1000,
  autoplay: !0,
  infinite: !0,
  loop: !0,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: !0,
        infinite: !0,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        infinite: !0,
      },
    },
  ],
});


$(".brand_logo_slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

$(".quicker_slider").slick({
  slidesToShow: 3.5,
  slidesToScroll: 1,
  arrows: !0,
  dots: !1,
  speed: 300,
  infinite: !1,
  autoplaySpeed: 5000,
  autoplay: !1,
  margin: 15,
  prevArrow: $(".sprev-arrow"),
  nextArrow: $(".snext-arrow"),
  responsive: [
    { breakpoint: 1199, settings: { slidesToShow: 2.5 } },
    { breakpoint: 991, settings: { slidesToShow: 2.5 } },
    {
      breakpoint: 767,
      settings: { slidesToShow: 1, autoplay: !1, centerPadding: "10px", },
    },
  ],
});
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: !1,
  draggable: !1,
  fade: !0,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: !1,
  arrows: !0,
  centerMode: !0,
  focusOnSelect: !0,
  centerPadding: "10px",
  prevArrow: '<span class="icon-angle-left"></span>',
  nextArrow: '<span class="icon-angle-right"></span>',
  responsive: [
    {
      breakpoint: 1199,
      settings: { dots: !1, slidesToShow: 3, centerMode: !0 },
    },
    {
      breakpoint: 991,
      settings: { dots: !1, slidesToShow: 1, centerMode: !1 },
    },
    {
      breakpoint: 767,
      settings: { autoplay: !0, dots: !1, slidesToShow: 1, centerMode: !1 },
    },
  ],
});
$(".faq_accordion > .faq_accordion-item > .answer").hide();
$(".faq_accordion > .faq_accordion-item").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active").find(".answer").slideUp();
  } else {
    $(".faq_accordion > .faq_accordion-item.active .answer").slideUp();
    $(".faq_accordion > li.active").removeClass("active");
    $(this).addClass("active").find(".answer").slideDown();
  }
  return !1;
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
});
$(".banner_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: !1,
  dots: !0,
  speed: 1000,
  autoplay: !0,
});



$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});




$('.nav-item span').on('click', function () {
  $(this).parent(".nav-item").siblings().find('.firstblock').removeClass('firstblock');
  $(this).next().toggleClass('firstblock');
});








document.querySelector('.rightNav-toggle')
  .addEventListener('click', function () {
    this.classList.toggle('activate');
  });



 

 