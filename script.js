// start-navigation
let barButton = document.querySelector(".bar i");
let xButton = document.querySelector(".test i");
let test = document.querySelector(".test ");

barButton.onclick = function() {
    test.classList.add('active');
}
xButton.onclick = function() {
    test.classList.remove('active');
}

// button onscroll
let btn = document.getElementById("scroll");

window.onscroll = function() {
    if(window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = () => {
    
    window.scroll({
        top:0,
        behavior: "smooth",
    })
}
