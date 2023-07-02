const id = localStorage.getItem("applicant_id");

fetch("../applicant.php", {
    "method": "POST",
    "headers": {
        "Content-type": "application/json; charset=utf-8"
    },
    "body": JSON.stringify(id)
})
.then((response) => {
    if(!response.ok){
        throw new Error("Something went wrong!");
    }

    return response.json();
})
.then((data) => {
    document.getElementById("profile_name").innerHTML = data[0]["firstname"];
})
.catch((error) => {
    alert(error);
});