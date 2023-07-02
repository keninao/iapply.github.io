const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

var array = {
    "id": localStorage.getItem("applicant_id"),
};
fetch("../getdark.php", {
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
    console.log(data["darkmode"]);
    localStorage.setItem("theme", data);
    if(data["darkmode"] == "dark"){
        document.body.classList = 'dark-theme-variables';
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
        themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
    }else{
        document.body.classList = '';
    }
}).catch();

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});


themeToggler.addEventListener('click', () => {
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    if (themeToggler.querySelector('span:nth-child(1)').classList.contains("active")) {
        var array = {
            "id": localStorage.getItem("applicant_id"),
            "theme": "light"
        };
        fetch("../dark.php", {
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
            localStorage.setItem("theme", data);
            document.body.classList = '';
        }).catch();
    } else if (themeToggler.querySelector('span:nth-child(2)').classList.contains("active")) {
        var array = {
            "id": localStorage.getItem("applicant_id"),
            "theme": "dark"
        };
        fetch("../dark.php", {
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
            localStorage.setItem("theme", data);
            document.body.classList = 'dark-theme-variables';
        }).catch();
    }
});
