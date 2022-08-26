//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const alertError = document.querySelector('.alert-error')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('h2')
// const modalBtnClose = document.querySelector('button.close')

inputWeight.oninput = ()=> alertError.classList.remove('open')
inputHeight.oninput = ()=> alertError.classList.remove('open')

const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('h2'),
  buttonClose: document.querySelector('button.close'),

  open: ()=>{
    Modal.wrapper.classList.add('open')
  },
  close(){
    Modal.wrapper.classList.remove('open')
  }
}

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(height)

  if (showAlertError) {
    alertError.classList.add('open')
    return
  }else{
    alertError.classList.remove('open')

  }


  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}` 

  Modal.message.innerText = message
  Modal.open()
  // modalWrapper.classList.add('open')
}

function notANumber(value){
  return isNaN(value) || value == ""
}

Modal.buttonClose.onclick = () => Modal.close()
// modalWrapper.classList.remove('open')

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event){
  if (event.key === 'Escape'){
    Modal.close()
  } else if (event.key === 'Enter'){
    Modal.open()
  }
      
   
}

function IMC(weight, height){
  return (weight / ((height / 100) ** 2)).toFixed(2)
}