/* Реализуйте записную книгу, хранящую данные в локальном хранилище.
Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
Данные вводить через соответсвующую форму.
--Каждому контакту добавить кнопку для удаления контакта.
--Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
*/


const btSave=document.getElementById("btsave")
function saveResponses() {
//btSave.onclick =()=> {
//for(let i=0; i<localStorage.length; i++) {
//    let key = localStorage.key(i);
//    alert(`${key}: ${localStorage.getItem(key)}`);
    let usersObj = {
        name: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        lastname2:document.getElementById("lastname2").value,
        phonenumber: document.getElementById("phonenumber").value,
        email:document.getElementById("email").value,
        date:document.getElementById("date").value,
    }
    let key=document.getElementById("recordnumber").value;
    localStorage.setItem(key,JSON.stringify(usersObj));
}
btSave.addEventListener("click", saveResponses);


const btErase=document.getElementById("bterase")
btErase.onclick =()=>{
    let key=document.getElementById("recordnumber").value;
    localStorage.removeItem(key);
}
