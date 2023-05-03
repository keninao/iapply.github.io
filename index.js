randomizer = document.getElementById("random_inner_container");

var modal = document.getElementById("myModal");

var btn = document.getElementById("signin");

var span = document.getElementsByClassName("close")[0]; 

var checkbox = document.getElementById("checkagree");

var donebtn = document.getElementById("donebtn");

var check = document.getElementById("confirm");

const cb = document.querySelector('#accept');

btn.onclick = function() {
    modal.style.display = "block";
    randomizer.innerHTML = "#2023112" + random_result(4);
    closePopup();

    if(checkbox.checked() = true){
        check.ariaDisabled() = false;
    }else{
        check.ariaDisabled() = true;
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

donebtn.onclick = function(){
    modal.style.display = "none";
    checkbox.checked = false;   
}

function random_result(length){
    var random_string = '';
    var character = '1234567890'

    for(var i, i=0; i <length; i++){
        random_string += character.charAt(Math.floor(Math.random() * character.length))
    }

    return random_string;
}

var popup = document.getElementById("popup");
            function openPopup(){
                popup.classList.add("open-popup");
            }
            function closePopup(){
                popup.classList.remove("open-popup");
        }

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