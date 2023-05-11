randomizer = document.getElementById("random_inner_container");

var modal = document.getElementById("myModal");

var btn = document.getElementById("apply");

var modal1 = document.getElementById("model-content1");

var err = document.getElementById("err");

const username = document.getElementById("modal1");
const password = document.getElementById("modal2");
const conpass = document.getElementById("modal3");

var warning0 = document.getElementById("error0")
var warning1 = document.getElementById("error1")
var warning2 = document.getElementById("error2")
var warning3 = document.getElementById("error3")

var back = document.getElementsByClassName("back")[0];

var span = document.getElementsByClassName("close")[0]; 


var donebtn = document.getElementById("donebtn");

var check = document.getElementById("confirm");

const cb = document.querySelector('#accept');

function agree(){
    var checkbox = document.getElementById("checkagree").checked;
    if(checkbox == true){
        check.className = "register";
    }else{
        check.className = "registerdisabled";
    }
}

btn.onclick = function() {
    modal.style.display = "grid";
    randomizer.innerHTML = "#2023112" + random_result(4);
}

back.onclick = function(){
    modal.style.marginLeft = "0";
    modal.style.animationName = "animateright";
    modal.style.animationDuration = "1s";
}

span.onclick = function() {
    modal.style.display = "none";
    modal.style.marginLeft = "0";
    modal.style.animationName = "none";
    modal.style.animationDuration = "0";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.style.marginLeft = "0";
        modal.style.animationName = "none";
        modal.style.animationDuration = "0";
    }
}

function next(){
    if(username.value.length < 5 && password.value.length > 0){
        warning0.style.opacity = "100%";
        warning0.style.display = "inline";
        err.innerHTML = "Invalid username, must be 5 letter above."
        err.style.opacity = "100%";
        warning0.style.display = "inline";
        warning1.style.opacity = "100%";
        warning2.style.opacity = "0%";
        warning3.style.opacity = "0%";
    }else if(username.value.length > 0 && password.value.length > 0){
        if(password.value == conpass.value){
            modal.style.marginLeft = "-100%";
            modal.style.animationName = "animateleft";
            modal.style.animationDuration = "1s";
            warning0.style.opacity = "0%";
            err.style.opacity = "0%";
            warning1.style.opacity = "0%";
            warning2.style.opacity = "0%";
            warning3.style.opacity = "0%";
        }else{
            warning0.style.opacity = "100%";
            warning0.style.display = "inline";
            err.innerHTML = "Password did not match!"
            err.style.display = "inline";
            err.style.opacity = "100%";
            warning1.style.opacity = "0";
            warning2.style.opacity = "100%";
            warning3.style.opacity = "100%";
        }
    }else if(username.value.length > 0 && password.value.length == 0 && conpass.value.length == 0){
        warning0.style.opacity = "100%"
        warning0.style.display = "inline";
        err.innerHTML = "Please enter a password!"
        err.style.display = "inline";
        err.style.opacity = "100%"
        warning1.style.opacity = "0%"
        warning2.style.opacity = "100%"
        warning3.style.opacity = "100%"
    }else{
        warning0.style.opacity = "100%";
        warning0.style.display = "inline";
        err.innerHTML = "Fill up the form!"
        err.style.opacity = "100%";
        err.style.display = "inline";
        warning1.style.opacity = "100%";
        warning2.style.opacity = "100%";
        warning3.style.opacity = "100%";
    }
}

donebtn.onclick = function(){
    modal.style.display = "none";
    checkbox.checked = false;   
}

function random_result(length){
    var random_string = '';
    var character = '1234567890'

    for(var i, i=0; i <length; i++){
        random_string += character.charAt(Math.floor(Math.random() * character.length))
    }

    return random_string;
}

