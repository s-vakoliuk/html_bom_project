/* Реализуйте записную книгу, хранящую данные в локальном хранилище.
Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
Данные вводить через соответсвующую форму.
--Каждому контакту добавить кнопку для удаления контакта.
--Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
*/
//const form01=document.getElementById("form01")



const btErase=document.getElementById("bterase")
btErase.onclick =()=>{
    localStorage.clear()
}

const btSave=document.getElementById("btsave")
btSave.onclick =()=> {
    let usersObj = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        lastname2: document.getElementById("lastname2").value,
        phonenumber: document.getElementById("phonenumber").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value
    }
    localStorage.setItem("1",JSON.stringify(usersObj));
}