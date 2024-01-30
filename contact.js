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

function text() {
    let s = document.querySelector("#contact");
    s.classList.add("hover");
};

window.addEventListener("load", text());

const animation2 = anime({ targets: ".footer", autoplay: !1, opacity: { value: [0, 1] } }),
    section2 = document.querySelector(".footer"),
    animationOnScroll = function (e, t = 100, a = 0) {
        let i = window.pageYOffset - e.offsetTop;
        return (i + a) / t;
    };

window.onscroll = function () {
    animation2.seek(animationOnScroll(section2, 1e3, 750) * animation2.duration)
};

anime({
    targets: '.window',
    scale: [0.7, 1], 
    duration: 500, 
    easing: "easeInOutSine"
})

function send() {
    let params = {
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        from_surname: document.getElementById('surname').value
    }

    emailjs.send("service_cjzh2yq","template_ag7cgog", params)
    .then(function (res) {
        alert('Email has been sent successfully!');
    })
}