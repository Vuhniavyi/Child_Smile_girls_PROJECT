
//sliderblock2

$('.clients-slider1').slick({
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  
  autoplay: true,  
  autoplaySpeed: 1000,

     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
      }
    }
  ]

  
});

// endslider2

//falling out modal1
$(document).ready(function() {
  $('.do-open').on('click', function() {
      $('#modal').css('display', 'block');
  });
  $('.do-close').on('click', function() {
      $('#modal').css('display', 'none');
  });
});


// countDown

$(function() {
  countDown()
});

function countDown() {
  
  var startTime = new Date();
  var day = startTime.getDate();
  var month = startTime.getMonth() + 2;
  var year = startTime.getFullYear();
  var todayDate = year + "/" + month + "/" + day;
  //console.log(todaydate);
  var endTime = new Date(todayDate +" 2:19:21");

  var hour = ("" + Math.floor(((endTime - startTime) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))).slice(-2);
  var minute = ("0" + Math.floor(((endTime - startTime) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60).slice(-2);
  var second = ("0" + Math.floor(((endTime - startTime) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60).slice(-2);
  var millissecond = ("0" + Math.floor(((endTime - startTime) % (24 * 60 * 60 * 1000)) / 10) % 100).slice(-2);
  
  $(".hours").html(hour + ':');
  $(".minutes").html(minute + ':');
  $(".seconds").html(second);
  setTimeout("countDown()", 10)
};

// endcountDown

//sliderfeedback

$('.clients-slider3').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  
  autoplay: true,  
  autoplaySpeed: 2000,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
      }
    }
  ]
  
});