const name = document.querySelector('#name');
const age = document.querySelector('#age');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const booklist = document.querySelector('#booklist');

btn.addEventListener('click', function(e){
    e.preventDefault();

    if(name.value == "" && age.value == "" && year.value == ""){
        alert("please fill up the box");
    } else{
        const newraw = document.createElement('tr');

        const newname = document.createElement('th');
        newname.innerHTML = name.value;
        newraw.appendChild(newname);

        const newage = document.createElement('th');
        newage.innerHTML = age.value;
        newraw.appendChild(newage);

        const newyear = document.createElement('th');
        newyear.innerHTML = year.value;
        newraw.appendChild(newyear);

        booklist.appendChild(newraw);
    }

})