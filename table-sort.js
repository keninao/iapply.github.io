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