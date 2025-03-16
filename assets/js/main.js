// nav
const gnbTl = gsap.timeline({
  paused: true,
})
gnbTl
.to('#header .gnb', 0.4, {xPercent:-100})
.from('#header .gnb ul > *', {opacity:0, yPercent:100, stagger: 0.03})

$('#header .btn-menu').click(function(){
  if($(this).hasClass('on')){
    gnbTl.reverse()
  }else{
    gnbTl.play()
  }
  $(this).toggleClass('on')
})


// line
const lineTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#work',
    start: '0% 80%',
    end: '100% 100%',
    onEnter: () => lineTl.play(), 
    onLeaveBack: () => lineTl.reverse(), 
  }
});

lineTl.from('#work .line', {
  opacity: 0,
  "width": 0,
  stagger: 1,
});


// project
const workTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#work',
    start: '0% 0%',
    end: '100% 100%',
    onEnter: () => workTl.play(), 
    onLeaveBack: () => {workTl.reverse();},
  }
});
workTl.from('#work ul li', {
  opacity: 0,
  y: 70, 
  duration: 0.7,
  stagger: 0.3
})


// planet
const planetTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#footer',
    start: '0% 0%',
    end: '100% 100%',
  }
});

planetTl.to('.planet', {
  width: 0,
  rotation: 360,
  ease: 'sine.inOut',
  duration: 5, 
  repeat: 5,
  yoyo: true 
});

