const selectElement = s => document.querySelector(s);
const selectElements = s => document.querySelectorAll(s);

const cercle = selectElement('.cercle');
const imgs = selectElements('img');

console.log(cercle, imgs);

const TL = gsap.timeline({paused: true});

TL
.to(imgs, {scale: 1, duration: .4, stagger: .1, ease: "back.out(1.7)"});


cercle.addEventListener('mouseenter', ()=> {
    TL.play();
});

cercle.addEventListener('mouseout', ()=> {
    TL.reverse();
});