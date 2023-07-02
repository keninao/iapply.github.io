/*---------------------------Job Posting------------------------*/
fetch("../conn.php")
.then((response) => {
    if(!response.ok){
        throw new Error("Something went wrong!");
    }

    return response.json();
})
.then((data) => {
    data.forEach(arr => {
        const tr = document.createElement('tr');
        const trContent = '<td><input type="checkbox" id="cb"></td><td>' + arr["position_title"] + '</td><td>' + arr["rank"] + '</td><td>' + arr["department"] + '</td><td>' + arr["hiring_start"] + '</td><td>' + arr["deadline"] + '</td>'
        tr.innerHTML = trContent;
        document.getElementById("job").appendChild(tr);
    })
})
.catch((error) => {});
/*---------------------------Rank------------------------*/
fetch("../rank.php")
.then((response) => {
    if(!response.ok){
        throw new Error("Something went wrong!");
    }

    return response.json();
})
.then((data) => {
    let new_data = data.split("-");
    
    for(let i = 0; i < new_data.length-1; i++){
        const new_arr = new_data[i];
        const tr = document.createElement('option');
        const trContent = '<option>' + new_arr + '</option>';
        tr.innerHTML = trContent;
        document.getElementById("rank").appendChild(tr);
    }
})
.catch((error) => {});
/*---------------------------Full Rank------------------------*/
fetch("../rankfull.php")
.then((response) => {
    if(!response.ok){
        throw new Error("Something went wrong!");
    }

    return response.json();
})
.then((data) =>{
    data.forEach(arr =>{
        const tr = document.createElement('tr')
        const trContent = '<td><input type="checkbox" id="all"></td><td>' + arr["rank_id"] + '</td><td>' + arr["rank_name"] + '</td><td>' + arr["department"] + '</td>'
        tr.innerHTML = trContent;
        document.getElementById("rankbody").appendChild(tr);
    })
})
/*---------------------------Department------------------------*/

fetch("../department.php")
.then((response) => {
    if(!response.ok){
        throw new Error("Something went wrong!");
    }

    return response.json();
})
.then((data) =>{
    data.forEach(arr =>{
        let new_arr = arr.split("&");
        const tr = document.createElement('tr')
        const trContent = '<td>' + new_arr[0] + '</td><td>' + new_arr[1] + '</td>'
        tr.innerHTML = trContent;
        document.getElementById("departmentbody").appendChild(tr);

        const trb = document.createElement('option');
        const trContentb =  new_arr[0];
        trb.innerHTML = trContentb;
        document.getElementById("department").appendChild(trb);
    })
})

