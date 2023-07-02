const id = localStorage.getItem("applicant_id");

fetch("../applicant.php", {
    "method": "POST",
    "headers": {
        "Content-type": "application/json; charset=utf-8"
    },
    "body": JSON.stringify(id)
})
    .then((response) => {
        if (!response.ok) {
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


var popup = document.getElementById("notif");
var closer = document.getElementById("close");

function getName(x) {
    popup.style.animation = "animatetop";
    popup.style.animationDuration = "1s";
    popup.style.left = "0";
    var id = x;
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
            document.getElementById("Rank").innerText = arr["rank"];
            document.getElementById("summary").innerText = "Summary: " + arr["details"];
        })
    })
}

window.onclick = function (event) {
    if (event.target == closer) {
        popup.style.animation = "animatehide";
        popup.style.animationDuration = "1s";
        popup.style.left = "";
    }
}