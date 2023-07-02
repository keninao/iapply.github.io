var btn = document.getElementById("signin");
var span = document.getElementsByClassName("close")[0];
const text = document.getElementById("textbox");
const modal = document.getElementById("result");
const message = document.getElementById("message");

function loginApplicant() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var capt = document.getElementById("captchatext").value;

    if (user == "") {
        modal.style.top = 0;
        modal.style.animation = "bringdown";
        modal.style.animationDuration = "1s";
        message.innerHTML = "Enter your account!";
    } else {
        let array = {
            "user": user
        }
        fetch("../login.php", {
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
            if (data.length == 0) {
                modal.style.top = 0;
                modal.style.animation = "bringdown";
                modal.style.animationDuration = "1s";
                message.innerHTML = "Account doesn't exist!";
            } else {
                data.forEach(arr => {
                    if (pass == "") {
                        modal.style.top = 0;
                        modal.style.animation = "bringdown";
                        modal.style.animationDuration = "1s";
                        message.innerHTML = "Enter your password!";
                        setTimeout(refresh, 900);
                    } else if (arr["password"] == pass && emptyArr.join("") == capt) {
                        localStorage.setItem("applicant_id", arr["applicant_id"]);
                        window.location.replace("./html/profile.html");
                    } else if (arr["password"] != pass) {
                        modal.style.top = 0;
                        modal.style.animation = "bringdown";
                        modal.style.animationDuration = "1s";
                        message.innerHTML = "Incorrect password!";
                    } else {
                        modal.style.top = 0;
                        modal.style.animation = "bringdown";
                        modal.style.animationDuration = "1s";
                        message.innerHTML = "Captcha doesn't match!";
                        setTimeout(refresh, 900);
                    }
                });
            }
        }).catch((error) => {
            modal.style.top = 0;
            modal.style.animation = "bringdown";
            modal.style.animationDuration = "1s";
            message.innerHTML = "Account doesn't exist!";
            console.log(error);
        });
    }
}

modal.onclick = function () {
    modal.style.top = "-100%";
    modal.style.animation = "bringup";
    modal.style.animationDuration = "1s";
}