const key = 'user-memorized'

// recupero il riferimento al nome dell'utente
const userName = document.getElementById('userName')

// recupero il riferimento ai due bottoni
const saveButton = document.getElementById('save')
const cancelButton = document.getElementById('cancel')

// // riferimento al form
// const myForm = document.getElementById('myForm')

saveButton.addEventListener('click', function () {
  // ora vado a salvare l'attuale contenuto del input field nel localStorage
  // in una chiave di nome "user-memorized"
  localStorage.setItem(key, userName.value)

  input.value = '' // assegno un nuovo valore alla textarea di stringa vuota
})

cancelButton.addEventListener('click', function () {
  // ora vado a cancellare il nome contenuto nel localStorage
  // nella chiave di nome "user-memorized"
  localStorage.removeItem(key)

  info[0].classList.add('d-none')
})

const info = document.getElementsByClassName('info')
const oldName = document.getElementById('oldUserName')

const savedContent = localStorage.getItem(key)
// savedContent ora è:
// a) una stringa
// b) null
// nel caso sia null, non succede nulla, altrimenti
//   visualizzo il nome già presente
if (savedContent) {
  info[0].classList.remove('d-none')
  const old = document.createElement('span')
  old.innerText = savedContent
  oldName.appendChild(old)
}

// recupero il riferimento al counter
document.addEventListener('DOMContentLoaded', function () {
  const counter = document.getElementById('time')
  let seconds = parseInt(counter.innerText)
  setInterval(function () {
    seconds++
    counter.innerText = seconds
  }, 1000)
})
