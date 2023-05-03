fetch("../conn.php")
    .then((response) => {
        if(!response.ok){
            throw new Error("Something went wrong!");
        }

        return response.json();
    })
    .then((data) => {
        var newStr = data.replaceAll("array", "\n");
        const array = newStr.split("\n");

        array.forEach(arr => {
            const new_arr = arr.split(" ");
            const tr = document.createElement('tr');
            const trContent = '<td>' + new_arr[0].replaceAll("_", " ") + '</td><td>' + new_arr[1].replaceAll("_", " ") + '</td><td>' + new_arr[2].replaceAll("_", " ") + '</td><td>' + new_arr[3].replaceAll("_", " ") + '</td><td>' + new_arr[4].replaceAll("_", " ") + '</td>'
            tr.innerHTML = trContent;
            document.querySelector('table tbody').appendChild(tr);
        })
        alert("Hello " + array[1].replaceAll("_", " "));
    })
    .catch((error) => {
        alert(error);
    });