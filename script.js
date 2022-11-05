(function () {

    const smoothScroll = function (targetEl, duration) {
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());




let header_search = document.querySelector(".header_search")
let header_search_box = document.querySelector(".header_search_box")
let would_like_close_box = document.querySelector(".would_like_close_box")
let slider_line = document.querySelector(".slider_line")
let slider_dot = document.querySelectorAll(".slider_dot")
let position = 0




header_search.addEventListener("click", function () {
    header_search_box.classList.add("active_box")
})

would_like_close_box.addEventListener("click", function (e) {
    e.preventDefault();
    header_search_box.classList.remove("active_box")
})

let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener("click", function () {
    if (position < slider_line.clientWidth * 2) {
        position = position + slider_line.clientWidth
    }
    else{
        position = 0
    }
    slider_line.style.left = -position + "px"


    for (let i = 0; i < slider_dot.length; i++) {

        slider_dot.forEach(function (z) {
            z.classList.remove("active_dot")
            slider_dot[position/slider_line.clientWidth].classList.add("active_dot")
        })
    }

})

prev.addEventListener("click", function () {

    if (position <= 0) {
        position = slider_line.clientWidth * 2
    }
    else {
        position = position - slider_line.clientWidth
    }

    slider_line.style.left = -position + "px"

    for (let i = 0; i < slider_dot.length; i++) {

        slider_dot.forEach(function (z) {
            z.classList.remove("active_dot")
            slider_dot[position/slider_line.clientWidth].classList.add("active_dot")
        })
    }

})

for (let i = 0; i < slider_dot.length; i++) {
    slider_dot[i].addEventListener("click", function () {
        slider_dot.forEach(function (z) {
            z.classList.remove("active_dot")
        })
        slider_dot[i].classList.add("active_dot")
        position = slider_line.clientWidth * i
        slider_line.style.left = -position + "px"


    })
}


console.log(window.innerWidth)



let steps_box = document.querySelectorAll(".steps_box")

let steps_link = document.querySelectorAll(".steps_link")

let steps_pic = document.querySelectorAll(".steps_pic")

let steps_box_text = document.querySelectorAll(".steps_box_text")



for (let i = 0; i < steps_link.length; i++) {

    steps_link[i].addEventListener("click", function () {

        steps_box.forEach(function (x) {
            x.classList.remove("steps_active_slide")
        })

        steps_link.forEach(function (y) {
            y.classList.remove("active_steps_link")
        })
        steps_link[i].classList.add("active_steps_link")


        steps_box[i].classList.add("steps_active_slide")

        let normalHeight = steps_box_text[i].clientHeight

        steps_pic[i].style.height = normalHeight + "px"


        if (window.innerWidth < 640) {
            for (let i = 0; i < steps_box_text.length; i++) {

                steps_pic[i].style.height = 220 + "px"
            }
        }
        else {

        }

    })

}

window.addEventListener('resize', function(event) {

    for (let i = 0; i < steps_box_text.length; i++) {

        let normalHeight = steps_box_text[i].clientHeight

        steps_pic[i].style.height = normalHeight + "px"
    }

})



window.addEventListener('resize', function(event) {

    if (window.innerWidth < 640) {
        for (let i = 0; i < steps_box_text.length; i++) {

            steps_pic[i].style.height = 220 + "px"
        }
    }
    else {

    }

    if (window.innerWidth < 389) {
        for (let i = 0; i < steps_box_text.length; i++) {

            steps_pic[i].style.height = 160 + "px"
        }
    }
    else {

    }


})




let faq_box_pic = document.querySelectorAll(".faq_box_pic")
let faq_box_bottom_txt = document.querySelectorAll(".faq_box_bottom_txt")


for (let i = 0; i < faq_box_pic.length; i++) {

    faq_box_pic[i].addEventListener("click", function () {

        if (faq_box_bottom_txt[i].classList.contains("active_faq")) {
            faq_box_bottom_txt[i].classList.remove("active_faq")
            faq_box_pic[i].style.transform = "rotate(0deg)";
        }
        else{
            faq_box_bottom_txt[i].classList.add("active_faq")
            faq_box_pic[i].style.transform = "rotate(45deg)";
        }

    })


}


let header_burger = document.querySelector(".header_burger")
let header_nav = document.querySelector(".header_nav")
let header_nav_close = document.querySelector(".header_nav_close")

header_burger.addEventListener("click", function () {
    header_nav.classList.add("header_nav_active")
})

header_nav_close.addEventListener("click", function () {
    header_nav.classList.remove("header_nav_active")
})

header_search.addEventListener("click", function () {
    header_nav.classList.remove("header_nav_active")
})


