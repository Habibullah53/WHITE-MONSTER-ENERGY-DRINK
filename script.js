// Floating Monster Can

const can = document.querySelector(".floating-can");

let position = 0;
let direction = 1;

setInterval(() => {
    position += direction * 0.5;

    if(position > 15) direction = -1;
    if(position < -15) direction = 1;

    can.style.transform = `translateY(${position}px)`;
}, 20);


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, .review, .hero-text, .hero-image").forEach(el=>{
    el.classList.add("fade-up");
    observer.observe(el);
});
function buyNow() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
window.addEventListener("load", function () {
    const video = document.getElementById("monsterVideo");

    video.play().catch(function(error) {
        console.log("Autoplay blocked by browser");
    });
});