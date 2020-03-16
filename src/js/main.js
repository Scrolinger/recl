$(document).ready(function(){

// сворачивание сортировки  
  $('.js-sorting li:not(:first)').slideToggle(0);

// фиксация шапки
  $(window).scroll(function(){
    if($(this).scrollTop()!=0){
      $('.js-main').css('margin-top', '76px');
      $('.js-header').css({
        'position' : 'fixed',
        'background' : '#fff',
        'border-bottom' : '1px solid #000'
      });
    } else {
      $('.js-main').css('margin-top', '0');
      $('.js-header').css({
        'position' : 'relative',
        'background' : 'transparent',
        'border-bottom' : 'none'
      });
    }
  });

// моб фильтр
  $(".js-control-filter").click(function() {
    $(".js-filter").fadeIn(250);
    $(".js-filter__body").css("transform", "translateX(100%)");
  });
  $(".js-filter__blockout").click(function() {
    $(".js-filter").fadeOut(250);
    $(".js-filter__body").css("transform", "translateX(0)");
  });

// моб меню
  $(".js-header-control").click(function() {
    $(".js-nav").fadeIn(250);
    $(".js-ul").css("transform", "translateX(-100%)");
  });
  $(".js-header__blockout").click(function() {
    $(".js-nav").fadeOut(250);
    $(".js-ul").css("transform", "translateX(0)");
  });

// показ кнопки сброса фильтра при выборе чекбокса
  $('.js-filter__checkbox').click(function() {
    if ($(this).is(':checked')){
      $(".js-reset").fadeIn(250);
    } else {
      $(".js-reset").fadeOut(250);
    }
  });
  $('.js-reset').click(function() {
    $(this).fadeOut(250);
  });

// сортировка
  $('.js-control__sorting').click(function() {
    $('.js-sorting li:not(:first)').slideToggle(250);
  });

});