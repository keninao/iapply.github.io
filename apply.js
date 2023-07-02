var warning0 = document.getElementById("error0")
var warning1 = document.getElementById("error1")
var warning2 = document.getElementById("error2")
var warning3 = document.getElementById("error3")

var back = document.getElementsByClassName("back")[0];

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

var passicon = document.getElementById("passicon");

var btn = document.getElementById("apply");

var seepass = document.getElementById("seepass");

var donebtn = document.getElementById("donebtn");

var register = document.getElementById("confirm");

const cb = document.querySelector('#accept');

const check = document.getElementById("checkagree");

const popup = document.getElementById("popup");

const result = document.getElementById("result");

passicon.onclick = function () {
    if (seepass.checked == false) {
        seepass.checked = true;
    } else {
        seepass.checked = false;
    }

    if (seepass.checked == true) {
        see();
    } else {
        hide();
    }
}

function see() {
    document.getElementById('modal2').type = "text";
    document.getElementById('modal3').type = "text";
}

function hide() {
    document.getElementById('modal2').type = "password";
    document.getElementById('modal3').type = "password";
}

btn.onclick = function () {
    modal.style.display = "grid";
}

back.onclick = function () {
    modal.style.marginLeft = "0";
    modal.style.animationName = "animateright";
    modal.style.animationDuration = "1s";
}

span.onclick = function () {
    modal.style.display = "none";
    modal.style.marginLeft = "0";
    modal.style.animationName = "none";
    modal.style.animationDuration = "0";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.style.marginLeft = "0";
        modal.style.animationName = "none";
        modal.style.animationDuration = "0";
    } else if (event.target == result) {
        result.style.top = "";
        result.style.animationName = "bringup";
        result.style.animationDuration = "1s";
    }
}

var cnt1 = 0;
var cnt2 = 0;
var cnt3 = 0;

function next() {
    let username = document.getElementById("modal1").value;
    let password = document.getElementById("modal2").value;
    let conpass = document.getElementById("modal3").value;
    const pass = document.getElementById("modal2").value;
    let passarr = pass.split("");
    passarr.forEach(isNumber);
    passarr.forEach(isUpperCase);
    passarr.forEach(isLowerCase);
    if (username.length < 5 && password.length > 0) {
        warning0.style.opacity = "100%";
        err.innerHTML = "Invalid username! Must be 5 letter above."
        err.style.opacity = "100%";
        err.style.display = "inline";
        warning1.style.opacity = "100%";
        warning2.style.opacity = "0%";
        warning3.style.opacity = "0%";
    } else if (username.length > 0 && password.length > 0) {
        if (password == conpass) {
            if (cnt3 > 0 && cnt1 > 0 && cnt2 > 0 && password.length >= 12) {
                let user = {
                    "username": username.toLowerCase()
                }
                fetch("../verify.php", {
                    "method": "POST",
                    "headers": {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    "body": JSON.stringify(user)
                }).then(function (response) {
                    return response.text();
                }).then(function (data) {
                    if (data == "true") {
                        modal.style.marginLeft = "-100%";
                        modal.style.animationName = "animateleft";
                        modal.style.animationDuration = "1s";
                        warning0.style.opacity = "0%";
                        err.style.opacity = "0%";
                        warning1.style.opacity = "0%";
                        warning2.style.opacity = "0%";
                        warning3.style.opacity = "0%";
                        req1.style.color = "#35d626";
                        req2.style.color = "#35d626";
                        req3.style.color = "#35d626";
                        req4.style.color = "#35d626";
                        localStorage.setItem("username", username.toLowerCase());
                        localStorage.setItem("password", password);
                    } else if(data == "false"){
                        warning0.style.opacity = "100%";
                        err.innerHTML = "Invalid! Username already used."
                        err.style.opacity = "100%";
                        err.style.display = "inline";
                        warning1.style.opacity = "100%";
                        warning2.style.opacity = "0%";
                        warning3.style.opacity = "0%";
                        username.value = "";
                        password.value = "";
                        conpass.value = "";
                    }
                    console.log(data);
                })

            } else {
                if (cnt1 > 0) {
                    req2.style.color = "#35d626";
                } else {
                    req2.style.color = "#000000";
                }
                if (cnt2 > 0) {
                    req3.style.color = "#35d626";
                } else {
                    req3.style.color = "#000000";
                }
                if (cnt3 > 0) {
                    req4.style.color = "#35d626";
                } else {
                    req4.style.color = "#000000";
                }
                if (password.length >= 12) {
                    req1.style.color = "#35d626";
                } else {
                    req1.style.color = "#000000";
                }
                warning0.style.opacity = "100%";
                err.innerHTML = "Password did not meet the requirements!"
                err.style.display = "inline";
                err.style.opacity = "100%";
                warning1.style.opacity = "0";
                warning2.style.opacity = "100%";
                warning3.style.opacity = "0";

                cnt1 = 0;
                cnt2 = 0;
                cnt3 = 0;
            }
        } else {
            warning0.style.opacity = "100%";
            err.innerHTML = "Password did not match!"
            err.style.display = "inline";
            err.style.opacity = "100%";
            warning1.style.opacity = "0";
            warning2.style.opacity = "100%";
            warning3.style.opacity = "100%";
        }
    } else if (username.length > 0 && password.length == 0 && conpass.length == 0) {
        warning0.style.opacity = "100%"
        err.innerHTML = "Please enter a password!"
        err.style.display = "inline";
        err.style.opacity = "100%"
        warning1.style.opacity = "0%"
        warning2.style.opacity = "100%"
        warning3.style.opacity = "100%"
    } else {
        warning0.style.opacity = "100%";
        err.innerHTML = "Fill up the form!"
        err.style.opacity = "100%";
        err.style.display = "inline";
        warning1.style.opacity = "100%";
        warning2.style.opacity = "100%";
        warning3.style.opacity = "100%";
    }
}

donebtn.onclick = function () {
    location.replace("../applicantlogin.html");
}

function random_result(length) {
    var random_string = '';
    var character = '1234567890'

    for (var i, i = 0; i < length; i++) {
        random_string += character.charAt(Math.floor(Math.random() * character.length))
    }

    return random_string;
}

function isUpperCase(x) {
    if (x == 'A') {
        cnt1 += 1;
    } else if (x == 'B') {
        cnt1 += 1;
    } else if (x == 'C') {
        cnt1 += 1;
    } else if (x == 'D') {
        cnt1 += 1;
    } else if (x == 'E') {
        cnt1 += 1;
    } else if (x == 'F') {
        cnt1 += 1;
    } else if (x == 'G') {
        cnt1 += 1;
    } else if (x == 'H') {
        cnt1 += 1;
    } else if (x == 'I') {
        cnt1 += 1;
    } else if (x == 'J') {
        cnt1 += 1;
    } else if (x == 'K') {
        cnt1 += 1;
    } else if (x == 'L') {
        cnt1 += 1;
    } else if (x == 'M') {
        cnt1 += 1;
    } else if (x == 'N') {
        cnt1 += 1;
    } else if (x == 'O') {
        cnt1 += 1;
    } else if (x == 'P') {
        cnt1 += 1;
    } else if (x == 'Q') {
        cnt1 += 1;
    } else if (x == 'R') {
        cnt1 += 1;
    } else if (x == 'S') {
        cnt1 += 1;
    } else if (x == 'T') {
        cnt1 += 1;
    } else if (x == 'U') {
        cnt1 += 1;
    } else if (x == 'V') {
        cnt1 += 1;
    } else if (x == 'W') {
        cnt1 += 1;
    } else if (x == 'X') {
        cnt1 += 1;
    } else if (x == 'Y') {
        cnt1 += 1;
    } else if (x == 'Z') {
        cnt1 += 1;
    }
}

function isLowerCase(x) {
    if (x == "a") {
        cnt2 += 1;
    } else if (x == "b") {
        cnt2 += 1;
    } else if (x == "c") {
        cnt2 += 1;
    } else if (x == "d") {
        cnt2 += 1;
    } else if (x == "e") {
        cnt2 += 1;
    } else if (x == "f") {
        cnt2 += 1;
    } else if (x == "g") {
        cnt2 += 1;
    } else if (x == "h") {
        cnt2 += 1;
    } else if (x == "i") {
        cnt2 += 1;
    } else if (x == "j") {
        cnt2 += 1;
    } else if (x == "k") {
        cnt2 += 1;
    } else if (x == "l") {
        cnt2 += 1;
    } else if (x == "m") {
        cnt2 += 1;
    } else if (x == "n") {
        cnt2 += 1;
    } else if (x == "o") {
        cnt2 += 1;
    } else if (x == "p") {
        cnt2 += 1;
    } else if (x == "q") {
        cnt2 += 1;
    } else if (x == "r") {
        cnt2 += 1;
    } else if (x == "s") {
        cnt2 += 1;
    } else if (x == "t") {
        cnt2 += 1;
    } else if (x == "u") {
        cnt2 += 1;
    } else if (x == "v") {
        cnt2 += 1;
    } else if (x == "w") {
        cnt2 += 1;
    } else if (x == "x") {
        cnt2 += 1;
    } else if (x == "y") {
        cnt2 += 1;
    } else if (x == "z") {
        cnt2 += 1;
    }
}

function isNumber(x) {
    if (x == "1") {
        cnt3 += 1;
    } else if (x == "2") {
        cnt3 += 1;
    } else if (x == "3") {
        cnt3 += 1;
    } else if (x == "4") {
        cnt3 += 1;
    } else if (x == "5") {
        cnt3 += 1;
    } else if (x == "6") {
        cnt3 += 1;
    } else if (x == "7") {
        cnt3 += 1;
    } else if (x == "8") {
        cnt3 += 1;
    } else if (x == "9") {
        cnt3 += 1;
    } else if (x == "0") {
        cnt3 += 1;
    }
}

register.onclick = function () {
    if (document.getElementById("firstname") != null || document.getElementById("middlename") != null || document.getElementById("lastname") != null || document.getElementById("contact") != null || document.getElementById("email") != null) {
        var users = localStorage.getItem("username");
        var pass = localStorage.getItem("password");
        var firstname = document.getElementById("firstname").value;
        var middlename = document.getElementById("middlename").value;
        var lastname = document.getElementById("lastname").value;
        var suffix = document.getElementById("suffix").value;
        var contact = document.getElementById("contact").value;
        var birthdate = document.getElementById("birthdate").value;
        var email = document.getElementById("email").value;
        var gender = document.getElementById("gender").value;
        var status = document.getElementById("civil").value;
        let user = {
            "firstname": firstname,
            "middlename": middlename,
            "lastname": lastname,
            "suffix": suffix,
            "contact": contact,
            "birthdate": birthdate,
            "email": email,
            "username": users.toLowerCase(),
            "password": pass,
            "gender": gender,
            "status": status
        }
        fetch("../register.php", {
            "method": "POST",
            "headers": {
                "Content-type": "application/json; charset=utf-8"
            },
            "body": JSON.stringify(user)
        }).then(function (response) {
            return response.text();
        }).then(function (data) {
            console.log(data);
            popup.className += " open-popup";
        })
    } else {
        result.style.top = "0";
        result.style.animation = "bringdown";
        result.style.animationDuration = "1s";
        document.getElementById("message").innerHTML = "Fill up the form.";
    }
}

function getName(x){
    localStorage.setItem("id", x);
    window.location.replace("../job_page.html");
}

if(window.location["href"].includes( "job_page.html") == true){
    console.log(localStorage.getItem("id"));
    var id = localStorage.getItem("id");
    let array = {
        "id": id
    }

    fetch("../getjob.php", {
        "method": "POST",
        "headers": {
            "Content-type": "application/json; charset=utf-8"
        },
        "body": JSON.stringify(array)
    }).then((response) => {
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
    
            return response.json();
    }).then((data) => {
        data.forEach(arr => {
            document.getElementById("Job_title").innerText = arr["position_title"];
            document.getElementById("Department").innerText = arr["department"];
            document.getElementById("Rank").innerText = arr["rank"];
            document.getElementById("summary").innerText = arr["details"];
        })
    })

}