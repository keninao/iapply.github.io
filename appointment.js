createapp = document.getElementById("createapp");
updateapp = document.getElementById("updateapp");
cancelapp = document.getElementById("cancelapp");

var create = document.getElementById("createschedule");

var update = document.getElementById("updateschedule");

var delete_ = document.getElementById("deleteschedule");


createapp.onclick = function() {
    create.style.display = "block";
}

updateapp.onclick = function() {
    update.style.display = "block";
}

cancelapp.onclick = function() {
    delete_.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == create) {
        create.style.display = "none";
    }if(event.target == update){
        update.style.display = "none";
    }if(event.target == delete_){
        delete_.style.display = "none";
    }
}
