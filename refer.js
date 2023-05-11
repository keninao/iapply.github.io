createrefer = document.getElementById("createref");
deleterefer = document.getElementById("deleteref");

var createref = document.getElementById("createreferral");


createrefer.onclick = function() {
    createref.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == createref) {
        createref.style.display = "none";
    }
}