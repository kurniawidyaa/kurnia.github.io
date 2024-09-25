// document.addEventListener("DOMContentLoaded", function() {

    const right = document.querySelectorAll(".right_animation");
    const left = document.querySelectorAll(".left_animation");
    const fadeUp = document.querySelectorAll(".fade_up");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    })
    right.forEach(element => {
        observer.observe(element)
    })
    left.forEach(element => {
        observer.observe(element)
    })

    const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry.target);
            entry.target.classList.toggle("fade_up", entry.isIntersecting);
        })
    })
    fadeUp.forEach(element => {
        fadeObserver.observe(element)
    })

    // responsive nav
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("#nav_links");
    const overlay = document.querySelector(".overlay");

    hamburger.addEventListener("click", () => {
        console.log("berhasil");
        navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";

        if(navLinks.style.display == "block") {
            overlay.style.top = "45%";
        } else {
            overlay.style.top = "25%";
        }
    })

// });
