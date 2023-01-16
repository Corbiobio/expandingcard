const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")
const p = document.getElementsByTagName("p")

div1.addEventListener("click", function () {
    if (div1.style.animationName === "upscale") {

        div1.style.animationName = "unscale"
        p[0].style.display = "none"

    } else {

        if (div2.style.animationName === "upscale") {
            div2.style.animationName = "unscale"
            p[1].style.display = "none"
        } else if (div3.style.animationName === "upscale") {
            div3.style.animationName = "unscale"
            p[2].style.display = "none"
        }

        div1.style.animationName = "upscale"
        p[0].style.display = "block"
    }
})

div2.addEventListener("click", function () {
    if (div2.style.animationName === "upscale") {
        div2.style.animationName = "unscale"
        p[1].style.display = "none"
    } else {

        if (div1.style.animationName === "upscale") {
            div1.style.animationName = "unscale"
            p[0].style.display = "none"
        } else if (div3.style.animationName === "upscale") {
            div3.style.animationName = "unscale"
            p[2].style.display = "none"
        }

        div2.style.animationName = "upscale"
        p[1].style.display = "block"
    }
})
div3.addEventListener("click", function () {
    if (div3.style.animationName === "upscale") {
        div3.style.animationName = "unscale"
        p[2].style.display = "none"
    } else {

        if (div1.style.animationName === "upscale") {
            div1.style.animationName = "unscale"
            p[0].style.display = "none"
        } else if (div2.style.animationName === "upscale") {
            div2.style.animationName = "unscale"
            p[1].style.display = "none"
        }

        div3.style.animationName = "upscale"
        p[2].style.display = "block"
    }
})