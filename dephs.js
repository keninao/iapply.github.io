createjob = document.getElementById("createjob");
updatejob = document.getElementById("updatejob");
deletejob = document.getElementById("deletejob");

createdep = document.getElementById("createdep");
updatedep = document.getElementById("updatedep");
deletedep = document.getElementById("deletedep");

createrank = document.getElementById("createrank");
updaterank = document.getElementById("updaterank");
deleterank = document.getElementById("deleterank");

var create = document.getElementById("createdepartment");

var update = document.getElementById("updatedepartment");

var delete_ = document.getElementById("deletedepartment");

var createj = document.getElementById("createjobposting");

var updatej = document.getElementById("updatejobposting");

var deletej = document.getElementById("deletejobposting");

var creater = document.getElementById("createranks");

var updater = document.getElementById("updateranks");

var deleter = document.getElementById("deleteranks");

createdep.onclick = function() {
    create.style.display = "block";
}

updatedep.onclick = function() {
    update.style.display = "block";
}

deletedep.onclick = function() {
    delete_.style.display = "block";
}

createjob.onclick = function() {
    createj.style.display = "block";
}

updatejob.onclick = function() {
    updatej.style.display = "block";
}

deletejob.onclick = function() {
    deletej.style.display = "block";
}

createrank.onclick = function() {
    creater.style.display = "block";
}

updaterank.onclick = function() {
    updater.style.display = "block";
}

deleterank.onclick = function() {
    deleter.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == create) {
        create.style.display = "none";
    }if(event.target == update){
        update.style.display = "none";
    }if(event.target == delete_){
        delete_.style.display = "none";
    }if (event.target == createj) {
        createj.style.display = "none";
    }if(event.target == updatej){
        updatej.style.display = "none";
    }if(event.target == deletej){
        deletej.style.display = "none";
    }if (event.target == creater) {
        creater.style.display = "none";
    }if(event.target == updater){
        updater.style.display = "none";
    }if(event.target == deleter){
        deleter.style.display = "none";
    }
}
