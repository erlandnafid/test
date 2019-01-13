const popupBtn      = document.getElementById("popupBtn");
const overlay       = document.getElementById("overlay");
const close         = document.getElementById("close");
const textCollapse  = document.getElementById("textCollapse");
const angleCollapse = document.getElementById("angleCollapse");

popupBtn.onclick = function () {
    overlay.style.display = "block";
}

close.onclick = function () {
    overlay.style.display = "none";
}

angleCollapse.onclick = function () {
    textCollapse.style.height = textCollapse.clientHeight ? 0 : textCollapse.scrollHeight + "px";
    if (angleCollapse.getAttribute("src") == "./img/angle-down.svg") {
        angleCollapse.setAttribute("src", "./img/angle-up.svg");
    } else {
        angleCollapse.setAttribute("src", "./img/angle-down.svg");
    }
}

window.onclick = function (event) {
    if (event.target == overlay) {
        overlay.style.display = "none";
    }
}