
$(function(){

    const leftMotion = gsap.timeline({})
    leftMotion.addLabel('label')
    .to('.loading-page strong',{xPercent:-35,delay:1,duration:0.1},'label')
    .to('.loading-page .txt01',{opacity:0,delay:1},'label')
    .to('.loading-page .txt02',{opacity:0,delay:1.3},'label')
    .to('.loading-page .txt03',{opacity:0,delay:1.6},'label')
    .to('.loading-page .txt04',{opacity:0,delay:2.8},'label')
    .to('.loading-page',{yPercent:-100,delay:3,ease: Power4.easeIn},'label')
    .fromTo('.sc-works h2',{
        yPercent:100,
        opacity:0
        
    },{
        yPercent:0,
        opacity:1,
        'position':'fixed',
    })

    const workMotion = gsap.timeline({
        scrollTrigger:{
            trigger: '.list-work',
            start: '0% 50%',
            end: '0% 100%',
            // markers: true,
            scrub: true,
        }
    })
    workMotion.to('.sc-works',{backgroundColor: '#000',color: '#fff'})
    

    $(window).scroll(function(){
        curr = $(window).scrollTop();
        
        target = $('.sc-works').offset().top;

        if(curr > target){
            $('header .top-area').addClass('on')
        }else{
            $('header .top-area').removeClass('on')
        }
    })

})