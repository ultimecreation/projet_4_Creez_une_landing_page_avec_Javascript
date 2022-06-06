// DOM ELEMENTS
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.close')





// FUNCTIONS 
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close the modal on click
const closeModal = () => modalbg.style.display = "none";

// validate user inputs
const validate = () => {
  // bind data
  const first = document.querySelector('#first')
  const last = document.querySelector('#last')
  const email = document.querySelector('#email')
  const quantity = document.querySelector('#quantity')
  const location = document.querySelector('input[name="location"]')
  const checkbox1 = document.querySelector('#checkbox1')
  console.log({
    first: first.value,
    last: last.value,
    email: email.value,
    quantity: quantity.value,
    location: location.value,
    checkbox1: checkbox1.checked,
  })

  // check for errors
  let errors = []
  if(first.value === '')errors.push({ target: first, msg: "Le prénom est requis" })
  if(last.value === '')errors.push({ target: last, msg: "Le nom est requis" })
  if(email.value === '')errors.push({ target: email, msg: "L'email est requis" })
  if(quantity.value === '')errors.push({ target: quantity, msg: "Le nombre de tournois est requis" })
  if(location.value === '')errors.push({ target: location, msg: "Un lieu de tournois est requise" })
  if(checkbox1.value === '')errors.push({ target: checkbox1, msg: "L'acceptation des CGU est requise" })

  if(errors.length > 0 ){
    errors.forEach(error => {
      console.log(error)
    })
    return false
  } 
   console.log('Félicitation NAS')
    return false
  

}

const displayErrors = (errors) => {
 errors.forEach( error => {
      console.log(error)
    })
}

// EVENT LISTENENERS
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener('click',closeModal)
