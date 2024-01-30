anime({
    targets: document.querySelector('.header'),
    translateY:
    {
        value: [-100, 0],
        duration: 500,
        easing: 'easeInOutSine'
    },
    opacity:
    {
        value: [0, 1],
        duration: 2000        
    }
});

var preload = document.querySelector(".preloader");

window.addEventListener("load", function () {
    preload.classList.add("preloader--hidden");
    preload.addEventListener("transitionend", function () {
        document.body.removeChild(preload);
    });
});

const animation = anime({ targets: ".wrap3", autoplay: !1, opacity: { value: [0, 1] }, scale: { value: 1.3 } }),
    animation2 = anime({ targets: ".footer", autoplay: !1, opacity: { value: [0, 1] } }),
    animation3 = anime({ targets: [".pic4", ".pic5", ".pic6"], autoplay: !1, opacity: { value: [0, 1] } }),
    animation4 = anime({ targets: [".pic7", ".pic8", ".pic9"], autoplay: !1, opacity: { value: [0, 1] } }),
    animation5 = anime({ targets: [".pic10", ".pic11", ".pic12"], autoplay: !1, opacity: { value: [0, 1] } }),
    section2 = document.querySelector(".footer"),
    section3 = document.querySelector(".pic5"),
    section4 = document.querySelector(".pic8"),
    section5 = document.querySelector(".pic11"),
    animationOnScroll = function (e, t = 100, a = 0) {
        let i = window.pageYOffset - e.offsetTop;
        return (i + a) / t;
    };

window.onscroll = function () {
        animation2.seek(animationOnScroll(section2, 1e3, 750) * animation.duration),
        animation3.seek(animationOnScroll(section3, 1e3, 700) * animation.duration),
        animation4.seek(animationOnScroll(section4, 1e3, 700) * animation.duration),
        animation5.seek(animationOnScroll(section5, 1e3, 700) * animation.duration)
};

function zoom() {
    document.querySelector(".pic1");
    let e = document.querySelector(".bigpic");
    e.classList.toggle("scale");
}
function zoom1() {
    document.querySelector(".pic2");
    let e = document.querySelector(".bigpic1");
    e.classList.toggle("scale");
}
function zoom2() {
    document.querySelector(".pic3");
    let e = document.querySelector(".bigpic2");
    e.classList.toggle("scale");
}
function zoom3() {
    document.querySelector(".pic1");
    let e = document.querySelector(".bigpic3");
    e.classList.toggle("scale");
}
function zoom4() {
    document.querySelector(".pic2");
    let e = document.querySelector(".bigpic4");
    e.classList.toggle("scale");
}
function zoom5() {
    document.querySelector(".pic3");
    let e = document.querySelector(".bigpic5");
    e.classList.toggle("scale");
}
function zoom6() {
    document.querySelector(".pic1");
    let e = document.querySelector(".bigpic6");
    e.classList.toggle("scale");
}
function zoom7() {
    document.querySelector(".pic2");
    let e = document.querySelector(".bigpic7");
    e.classList.toggle("scale");
}
function zoom8() {
    document.querySelector(".pic3");
    let e = document.querySelector(".bigpic8");
    e.classList.toggle("scale");
}
function zoom9() {
    document.querySelector(".pic1");
    let e = document.querySelector(".bigpic9");
    e.classList.toggle("scale");
}
function zoom10() {
    document.querySelector(".pic2");
    let e = document.querySelector(".bigpic10");
    e.classList.toggle("scale");
}
function zoom11() {
    document.querySelector(".pic3");
    let e = document.querySelector(".bigpic11");
    e.classList.toggle("scale");
}

function text() {
    let s = document.querySelector("#gallery");
    s.classList.add("hover");
}

window.addEventListener("load", text());

anime({
    targets: '#anime',
    scale: [0.7, 1], 
    duration: 500, 
    easing: "easeInOutSine"
})
