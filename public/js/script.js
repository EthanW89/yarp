"use strict";
(function(){

  $(".yarp").delay(8000).fadeIn();

  $(".ball").delay(6000).fadeOut();

  setTimeout(function(){
    $('.ball').remove();
  }, 7000);

  $('.instructions').delay(8500).fadeIn();

  $('.box').delay(8500).fadeIn();

  //this movement code was found here http://stackoverflow.com/questions/4950575/how-to-move-a-div-with-arrow-keys
  var pane = $('#container'),
      box = $('.box'),
      w = pane.width() - box.width(),
      d = {},
      x = 3;

  function newv(v,a,b) {
      var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
      return n < 0 ? 0 : n > w ? w : n;
  }

  $(window).keydown(function(e) {
    d[e.which] = true;
    $('.box').toggleClass('walk');
  });

  $(window).keyup(function(e) {
    d[e.which] = false;
  });

  setInterval(function() {
    box.css({
      left: function(i,v) { return newv(v, 37, 39); },
      top: function(i,v) { return newv(v, 38, 40); }
    });
  }, 30);


  // setInterval(function() {
  //   $('.box').toggleClass('walk');
  // }, 500)


})();
