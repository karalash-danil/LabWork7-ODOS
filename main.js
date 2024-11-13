var current_menu_state = false;




function menu_state(state) {
    var aside = document.getElementById("side-menu")
    if (aside == null) {return}

    if (state) {
        aside.style.transform = "translate(0,0)"
    } else {
        aside.style.transform = "translate(-100%,0)"
    }
    current_menu_state = state;
}
function menu_state_toggle() {
    menu_state(!current_menu_state);
}

function displayWindowSize(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    

    if (w > 960) {
        menu_state(true);
    } else {
        menu_state(false);
    }

    var debug1 = document.getElementById("debug1");
    if (debug1 == null) {return}
    debug1.innerHTML = "<b>Debug</b> Width: " + w + ", " + "Height: " + h;
}
window.addEventListener("resize", displayWindowSize);

window.addEventListener("load", () => {
    displayWindowSize();

    const el = document.querySelector("#page-head")
    if (el == null) {return}
    
    const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("stuck", e.intersectionRatio < 1),
    { threshold: [1] }
    );

    observer.observe(el);
});