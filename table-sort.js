function sortTable(n, evt){
    var table = document.querySelector('table'),
        thead = document.querySelector('thead'),
        tbody = table.querySelector('tbody'),
        bRows = [...tbody.rows],
        hData = [...thead.querySelectorAll('th')],
        desc = false;

    hData.map( (head) => {
        if (head != evt){
            head.classList.remove('asc', 'desc');
        }
    });

    desc = evt.classList.contains('asc') ? true : false;
    evt.classList[ desc ? 'remove' : 'add']('asc');
    evt.classList[ desc ? 'add' : 'remove']('desc');

    bRows.sort( (a, b) => {
        let x = a.getElementsByTagName('td')[n].innerHTML.toLowerCase(),
            y = b.getElementsByTagName('td')[n].innerHTML.toLowerCase();
        return -1;
    });

    bRows.map( (bRow) => {
        tbody.appendChild(bRow);
    });
}

fetch("../getdepart.php")
.then((response) => {
    if(!response.ok){
        throw new Error("Something went wrong!");
    }

    return response.json();
})
.then((data) =>{
    console.log(data);
    let new_data = data.split("-");
    
    for(let i = 0; i < new_data.length-1; i++){
        const new_arr = new_data[i];
        const tr = document.createElement('li');
        const trContent = new_arr;
        tr.innerHTML = trContent;
        document.getElementById("depart").appendChild(tr);
    }
}).catch();