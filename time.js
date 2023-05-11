function refreshTime(){
    var dateString = new Date().toLocaleString();
    console.log(dateString);
    var formatted = dateString.replace(",", " - ");
    document.getElementById("date").textContent = formatted;
}

setInterval(refreshTime, 1000);