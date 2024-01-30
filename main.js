const mySlider = new Splide("#mySlider", {
    type: "loop",
    autoScroll: { speed: 2, pauseOnHover: (boolean = !1) },
    classes: { pagination: "splide__pagination custom-pagin", page: "splide__pagination__page custom-page" },
    pagination: (boolean = !1),
});
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
mySlider.mount(window.splide.Extensions),
    anime({ targets: document.querySelector(".header"), translateY: { value: [-100, 0], duration: 500, easing: "easeInOutSine" }, opacity: { value: [0, 1], duration: 1000 }, delay: 1000 }),
    anime({ targets: document.querySelector(".mainbox"), scale: [0.5, 1], duration: 500, easing: "easeInOutSine",}),
    anime({ targets: ".big", opacity: { value: [0, 1], duration: 500, easing: "easeInOutSine", } }),
    anime({ targets: document.querySelector(".big"), scale: { value: 1.3, delay: 500, duration: 500, easing: "easeInOutSine" }, direction: "alternate" }),
    document.addEventListener("DOMContentLoaded", stayHidden);
const hide = document.querySelector(".wrap3"),
    footer = document.querySelector(".footer"),
    pic1 = document.querySelector(".pic1"),
    pic2 = document.querySelector(".pic2"),
    pic3 = document.querySelector(".pic3");
function stayHidden() {
    hide.classList.add("hidden"), footer.classList.add("hidden");
}
const animation = anime({ targets: ".wrap3", autoplay: !1, opacity: { value: [0, 1] }, scale: { value: 1.3 } }),
    animation2 = anime({ targets: ".footer", autoplay: !1, opacity: { value: [0, 1] } }),
    animation3 = anime({ targets: [".pic1", ".pic2", ".pic3"], autoplay: !1, scale: [0, 0.92] }),
    animation4 = anime({ targets: [".text1", ".text2", ".text3"], autoplay: !1, opacity: [0, 1] }),
    animation5 = anime({ targets: ".mainbox", autoplay: !1, opacity: [1, 0] }),
    section = document.querySelector(".wrap3"),
    section2 = document.querySelector(".footer"),
    section3 = document.querySelector(".pic1"),
    section4 = document.querySelector(".wrap1"),
    animationOnScroll = function (e, t = 100, a = 0) {
        let i = window.pageYOffset - e.offsetTop;
        return (i + a) / t;
    };

window.onscroll = function () {
    animation.seek(animationOnScroll(section, 1e3, 650) * animation.duration),
        animation2.seek(animationOnScroll(section2, 1e3, 750) * animation.duration),
        animation3.seek(animationOnScroll(section, 1e3, 550) * animation.duration),
        animation4.seek(animationOnScroll(section3, 1e3, 220) * animation.duration),
        animation5.seek(animationOnScroll(section4, 1e3, -500) * animation.duration);
};

var preload = document.querySelector(".preloader");

window.addEventListener("load", function () {
    preload.classList.add("preloader--hidden");
    preload.addEventListener("transitionend", function () {
        document.body.removeChild(preload);
    });
});

function text() {
    let s = document.querySelector("#home");
    s.classList.add("hover");
}

window.addEventListener("load", text());
