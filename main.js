/* Реализуйте записную книгу, хранящую данные в локальном хранилище.
Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
Данные вводить через соответсвующую форму.
--Каждому контакту добавить кнопку для удаления контакта.
--Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
*/

//Кнопка збереження
const btSave=document.getElementById("btsave")
btSave.onclick =()=> {
let usersObj = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        lastname2: document.getElementById("lastname2").value,
        phonenumber: document.getElementById("phonenumber").value,
        email:document.getElementById("email").value,
        date:document.getElementById("date").value,
    }
    let key=document.getElementById("recordnumber").value;
    localStorage.setItem(key,JSON.stringify(usersObj));
}

//Кнопка редагування
const btEdit=document.getElementById("btedit")
btEdit.onclick =()=> {
    let key=document.getElementById("recordnumber").value;
    let usersObjEdit = JSON.parse (localStorage.getItem (key));
    document.getElementById("firstname").value = usersObjEdit["firstname"];
    document.getElementById("lastname").value = usersObjEdit["lastname"];
    document.getElementById("lastname2").value = usersObjEdit["lastname2"];
    document.getElementById("phonenumber").value = usersObjEdit["phonenumber"];
    document.getElementById("email").value = usersObjEdit["email"];
    document.getElementById("date").vlue = usersObjEdit["date"];
    console.log(usersObjEdit);
}

//Кнопка видалення
const btErase=document.getElementById("bterase")
btErase.onclick =()=>{
    let key=document.getElementById("recordnumber").value;
    localStorage.removeItem(key);
}