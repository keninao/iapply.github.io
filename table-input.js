fetch("../conn.php")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        return response.json();
    })
    .then((data) => {
        data.forEach(arr => {
            const tr = document.createElement('tr');
            tr.setAttribute('id', arr["position_title"]);
            const trContent = '<td>' + arr["position_title"] + '</td><td>' + arr["rank"] + '</td><td>' + arr["department"] + '</td><td>' + arr["hiring_start"] + '</td><td>' + arr["deadline"] + '</td><td><a href="#" onclick="getName('+arr["job_id"] + ')">Apply</a></td>';
            tr.innerHTML = trContent;
            document.getElementById("job").appendChild(tr);
        })
    })