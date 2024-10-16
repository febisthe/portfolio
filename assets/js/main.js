// [헤더] click
function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();

  $('.module .hours').text(hour);
  $('.module .minutes').text(min);
}

updateClock();
setInterval(updateClock, 1000);

// [섹션1] introduce
const introduce = gsap.timeline({
  scrollTrigger:{
    trigger:'.sc-introduce',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 3,
  }
});

introduce.from('.sc-introduce .headline', {autoAlpha:0});
introduce.from('.sc-introduce .text span:nth-child(1)', {autoAlpha:0});
introduce.from('.sc-introduce .text span:nth-child(2)', {autoAlpha:0});
introduce.from('.sc-introduce .text span:nth-child(3)', {autoAlpha:0});
introduce.from('.sc-introduce .text span:nth-child(4)', {autoAlpha:0});
introduce.from('.sc-introduce .text span:nth-child(5)', {autoAlpha:0});
introduce.from('.sc-introduce .text span:nth-child(6)', {autoAlpha:0});
introduce.from('.sc-introduce .text span:nth-child(7)', {autoAlpha:0});


// [섹션2] 프로젝트
$('.sc-project .control .btn-view').click(function () {
  if ($('.sc-project ul').hasClass('active')) {
    $(this).text('VIEW 1x2');
  } else {
    $(this).text('VIEW 1x3');
  }
  $('.sc-project ul').toggleClass('active');
});

// [섹션3] 큐앤에이
$('.sc-qna .col-right li').click(function () {
  $(this).toggleClass('active');
});

// [푸터] copy
footCopy = gsap.timeline({
  scrollTrigger: {
    trigger: '#footer',
    start: '0% 80%',
    toggleActions: 'play none play reverse',
  },
});
footCopy.to(
  '#footer .copy span:nth-child(2)',
  {
    y: 40,
  },
  'a'
);
footCopy.to(
  '#footer .copy span:nth-child(3)',
  {
    y: 80,
  },
  'a'
);

// [반응형] footer-copy
gsap.matchMedia().add('(max-width: 1024px)', () => {
  const footCopy = gsap.timeline({
    scrollTrigger: {
      trigger: '#footer',
      start: '0% 80%',
      toggleActions: 'play none play reverse',
    },
  });
  footCopy.to(
    '#footer .copy span:nth-child(2)',
    {
      y: 20,
    },
    'a'
  );
  footCopy.to(
    '#footer .copy span:nth-child(3)',
    {
      y: 40,
    },
    'a'
  );
});

gsap.matchMedia().add('(max-width: 768px)', () => {
  const footCopy = gsap.timeline({
    scrollTrigger: {
      trigger: '#footer',
      start: '0% 80%',
      toggleActions: 'play none play reverse',
    },
  });
  footCopy.to(
    '#footer .copy span:nth-child(2)',
    {
      y: 10,
    },
    'a'
  );
  footCopy.to(
    '#footer .copy span:nth-child(3)',
    {
      y: 20,
    },
    'a'
  );
});

// [반응형] 서브메뉴
$('#header .btn-box').click(function () {
  $(this).toggleClass('on');
  $('.head-inner2 .sub nav').toggleClass('active');
});
