const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para  = document.querySelector('p');

form.onsubmit =function (e) {
    if (fname.value === '' || lname.value === '') {
        e.preventDefault();
        return para.textContent =  'You need to fill in both names!';
    } else { 
       return para.textContent = `Hello ${fname.value} ${lname.value}`;
       
    }
}