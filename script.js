// navigation visible/hidden

function toggleNav() {
    let getSidebarUl = document.querySelector(".nav-sidebar ul");

    if (getSidebarUl.style.visibility === "visible") {
        getSidebarUl.style.visibility = "hidden";
    } else {
        getSidebarUl.style.visibility = "visible";
    }
}

// BODY background-color changing

document.querySelector("#li-home").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f1f1f1";
    toggleNav();
});

document.querySelector("#li-red").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    toggleNav();
});

document.querySelector("#li-orange").addEventListener("click", function () {
    document.body.style.backgroundColor = "orange";
    toggleNav();
});

document.querySelector("#li-purple").addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
    toggleNav();
});

document.querySelector("#li-green").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    toggleNav();
});

