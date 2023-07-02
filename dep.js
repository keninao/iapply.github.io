createjob = document.getElementById("createjob");
updatejob = document.getElementById("updatejob");
deletejob = document.getElementById("deletejob");

createrank = document.getElementById("createrank");
updaterank = document.getElementById("updaterank");
deleterank = document.getElementById("deleterank");

var notif = document.getElementById("notif");

var createj = document.getElementById("createjobposting");

var updatej = document.getElementById("updatejobposting");

var deletej = document.getElementById("deletejobposting");

var creater = document.getElementById("createranks");

var updater = document.getElementById("updateranks");

var deleter = document.getElementById("deleteranks");

var ret = document.getElementById("return");

var done = document.getElementById("create_job");

ret.onclick = function(){
    createj.style.left = "0";
    createj.style.animation = "animateright";
    createj.style.animationDuration = "1s";
}

createjob.onclick = function() {
    createj.style.display = "grid";
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
    if (event.target == createj) {
        createj.style.display = "none";
        createj.style.left = "0";
        createj.style.animation = "none";
    }else if(event.target == updatej){
        updatej.style.display = "none";
    }else if(event.target == deletej){
        deletej.style.display = "none";
    }else if (event.target == creater) {
        creater.style.display = "none";
    }else if(event.target == updater){
        updater.style.display = "none";
    }else if(event.target == deleter){
        deleter.style.display = "none";
    }else if (event.target == notif) {
        createj.style.display = "";
        createj.style.left = "0";
        createj.style.animation = "none";
        location.reload();
    }
}

const next = document.getElementById("next");
const textboxes = document.getElementById("textboxes");
const add = document.getElementById("add");

var counter = 1;
localStorage.setItem("num", counter);

next.onclick = function(){
    createj.style.left = "-100%";
    createj.style.animation = "animateleft";
    createj.style.animationDuration = "1s";
    var jobtitle = document.getElementById("Title").value;
    var rank = document.getElementById("rank").value;
    var dep = document.getElementById("department").value;
    var hstart = document.getElementById("hiringstart").value;
    var hdead = document.getElementById("hiringdeadline").value;
    var desc = document.getElementById("desc").value.toString();

    localStorage.setItem("jobtitle", jobtitle);
    localStorage.setItem("rank", rank);
    localStorage.setItem("dep", dep);
    localStorage.setItem("hstart", hstart);
    localStorage.setItem("hdead", hdead);
    localStorage.setItem("desc", desc);
}

add.onclick = function(){
    counter += 1;
    const tr = document.createElement('div');
    const trContent = '<input type="text" id="qual" placeholder="Qualification No. ' + counter + '"><input type="text" id="grade" placeholder="Grade">';
    tr.innerHTML = trContent;
    document.getElementById("textboxes").appendChild(tr);
    localStorage.setItem("num", counter);
}

function save_job(){
    var jobtitle = localStorage.getItem("jobtitle");
    var rank = localStorage.getItem("rank");
    var dep = localStorage.getItem("dep");
    var hstart = localStorage.getItem("hstart");
    var hdead = localStorage.getItem("hdead");
    var desc = localStorage.getItem("desc");
    let quali = [];
    let grades = [];

    [...document.querySelectorAll('input[id^="qual"]')].forEach(function(e){
      quali.push(e.value);
    });

    [...document.querySelectorAll('input[id^="grade"]')].forEach(function(e){
      grades.push(e.value);
    });

    console.log(jobtitle + " " + rank + " " + dep + " " + hstart + " " + hdead + " " + desc + " " + quali + " " + grades);
    
    let array = {
        "jtitle": jobtitle,
        "jrank": rank,
        "jdep": dep,
        "jhstart": hstart,
        "jhdead": hdead,
        "jdesc": desc,
        "jobquali": quali.toString(),
        "jobgrade": grades.toString()
    }

    fetch("../jobcreate.php", {
        "method": "POST",
        "headers": {
            "Content-type": "application/json; charset=utf-8"
        },
        "body": JSON.stringify(array)
    }).then(function(response){
        return response.text();
    }).then((data) => {
        console.log(data);
        if(data == "true"){
            document.getElementById("notif").style.display = "block";
        }
    }).catch(reportError(e));
}