const field = document.querySelectorAll('.note textarea')
const btn_save = document.querySelector('#save')
const dateElement  = document.querySelector('input[type="date"]')
const btnClear = document.querySelector('#clear')

checkFields()
function checkFields(){
    for(let i = 0; i < field.length; i++){
        let notesUser = localStorage.getItem(field[i].getAttribute('class'))
        if(notesUser){
            field[i].innerText = notesUser
            dateElement.value = localStorage.getItem(date)
        }
    }
}


btn_save.addEventListener('click', () => {
  for(i = 0; i < field.length; i++) {
    if(field[i].value != ""){
        localStorage.setItem(field[i].getAttribute('class'),field[i].value)
        localStorage.setItem(dateElement.id,dateElement.value)
    }
  }
})

function defineDate(){
    let date = new Date()
    dateElement.value = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
}defineDate()

function clearNotes(){
    btnClear.addEventListener('click',()=>{
        localStorage.clear()
        location.reload()
    })
}clearNotes()


