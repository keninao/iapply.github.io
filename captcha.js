function refresh(){
    document.getElementById("captchatext").value = "";
    document.getElementById("password").value = "";
    emptyArr = [];
    for (let j = 1; j <= 7; j++) {
        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = emptyArr.join('');
    ctx.fillText(emptyArr.join(''),captchaText.width/6, captchaText.height/1.7);
}

let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "50px Roboto";
ctx.fillStyle = "red";

let refreshButton = document.querySelector('#refreshButton');

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var emptyArr = [];

for (let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
ctx.fillText(emptyArr.join(''),captchaText.width/6, captchaText.height/1.7);


refreshButton.addEventListener('click', function() {
    document.getElementById("captchatext").value = "";
    emptyArr = [];
    for (let j = 1; j <= 7; j++) {
        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = emptyArr.join('');
    ctx.fillText(emptyArr.join(''),captchaText.width/6, captchaText.height/1.7);
});