$(function () {
  $('.menu__list a, .header__logo').on('click', function (e) {
    e.preventDefault()

    var id = $(this).attr('href'),
      top = $(id).offset().top

    $('body,html').animate(
      {
        scrollTop: top,
      },
      1500,
    )
  })

  $('.menu__btn, .menu__list a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  })
})
