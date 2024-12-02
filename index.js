const button = document.getElementById('b1');
const text = document.getElementById('t1');

button.addEventListener('click', ()=>{
    text.value = "Form Submitted!";
   event.preventDefault();
});