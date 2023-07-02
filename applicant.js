function logout(){
    window.location.replace("../applicantlogin.html");
    localStorage.clear();
}

function calendar(){
    window.location.replace("./profile_calendar.html");
}

function message(){
    window.location.replace("./profile_messages.html");
}

function jobposting(){
    window.location.replace("./profile_jobposting.html");
}

function referral(){
    window.location.replace("./profile_referral.html");
}

function requirements(){
    window.location.replace("./profile_requirements.html");
}

function main(){
    window.location.replace("./profile.html");
}

if(localStorage.getItem("applicant_id") == undefined){
    window.location.replace("../applicantlogin.html");
}

console.log(window.location["href"]);