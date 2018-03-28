$(function () {
  //HideStuff
  $('#getStarted,#finish, #previous, .hide').hide();


  $('#title').on('mouseover', function () {
  $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
  });
  $('#getStarted').show();
  $('#title').on('mouseleave', function () {
  $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
  });
  $('#getStarted').on('click', function(){
    $('.hide').show();
    $('#getStarted').hide();
  });
  $('#finish').on('click',function() {

  })
  $('.hide,#next,#previous, #finish').on('click',function () {
    var currentItem = $('li.active');
    var nextItem = $('li.active').next();

    currentItem.toggleClass('active');
    nextItem.toggleClass('active');

    if($('li').last().hasClass('active')) {
      $('#next').hide();
      $('#finish').show();
    } else {
      $('#next').show();
      $('#finish').hide();
    }
    if($('li').last().hasClass('active')) {
      $('#previous').hide();
    } else {
      $('#previous').show();
      $('#finish').hide();
    }
  });

  $('#previous').on('click',function () {
    var currentItem = $('li.active');
    var previousItem = $('li.active').prev();

    currentItem.toggleClass('active');
    previousItem.toggleClass('active');
    if($('li').last().hasClass('active')) {
      $('#previous').hide();
    } else {
      $('#previous').show();
      $('#finish').hide();
    }
    if($('li').last().hasClass('active')) {
      $('#next').hide();
      $('#finish').show();
    } else {
      $('#next').show();
      $('#finish').hide();
    }
  });

});
