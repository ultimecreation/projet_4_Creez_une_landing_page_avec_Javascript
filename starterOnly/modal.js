// DOM ELEMENTS
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.close')
const form = document.querySelector('form[name="reserve"]')
const formSubmissionSuccess = document.querySelector('#div__submission--success')




// FUNCTIONS 
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/**
 * reset input errors 
 * and remove red borders around inputs
 * @return  void
 */
const resetFormErrors = () => {
    // bind formData/error__msg css classes
    const formDataArray = document.querySelectorAll('.formData')
    const errorMsgContainers = document.querySelectorAll('.error__msg')

    // remove the red borders
    formDataArray.forEach(formData => {
        formData.dataset.errorVisible = false
        console.log(formData.dataset.errorVisible)
    })

    // remove the error text
    errorMsgContainers.forEach(errorMsgContainer => {
        errorMsgContainer.textContent = ''
    })
}

/**
 * launch modal on btn click
 * resets at start errors if any 
 * @return  void
 */
function launchModal() {
    resetFormErrors()
    modalbg.style.display = "block";
}

/**
 * close the modal when X is clicked
 * @return  void
 */
const closeModal = () => {
    formSubmissionSuccess.style.display = 'none'
    form.style.display = 'block'
    modalbg.style.display = "none";
}

/**
 * [validate description]
 *
 * @param  event  
 *
 * @return  boolean   
 */
const validate = (event) => {
    // prevent from default button behavior and reset errors if any
    event.preventDefault()
    resetFormErrors()

    // bind incoming data
    
    const first = document.querySelector('#first')
    const last = document.querySelector('#last')
    const email = document.querySelector('#email')
    const birthdate = document.querySelector('#birthdate')
    const quantity = document.querySelector('#quantity')
    let location = document.querySelector('input[name="location"]:checked')
    const checkbox1 = document.querySelector('#checkbox1')
    const lettersRegex = letters = /^[A-Za-z]+$/
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // create empty errors array to fill while checking for errors
    let errors = []
    if (first.value.length < 2) errors.push({ target: first, msg: "Veuillez entrer 2 caractères ou plus pour le champ du prénom." })
    else if(!first.value.match(lettersRegex)) errors.push({ target: first, msg: "Seuls les caractères alphabétiques sont valides pour le champ du prénom." })
    if (last.value.length < 2) errors.push({ target: last, msg: "Veuillez entrer 2 caractères ou plus pour le champ du nom." })
    else if(!last.value.match(lettersRegex)) errors.push({ target: last, msg: "Seuls les caractères alphabétiques sont valides pour le champ du nom." })
    if (email.value === '') errors.push({ target: email, msg: "L'email est requis" })
    else if (!email.value.toLowerCase().match(emailRegex)) errors.push({ target: email, msg: "L'email n'est pas valide" })
    if (birthdate.value === '') errors.push({ target: birthdate, msg: "Vous devez entrer votre date de naissance." })
    if (!parseInt(quantity.value)) errors.push({ target: quantity, msg: "Le nombre de tournois est requis" })
    if (location === null) {
        // no location selected, set the location input as default to display the error
        location = document.querySelector('input[name="location"]')
        errors.push({ target: location, msg: "Vous devez choisir une option." })
    }
    if (checkbox1.checked !== true) errors.push({ target: checkbox1, msg: "Vous devez vérifier que vous acceptez les termes et conditions." })

    // some errors found, display them to the user
    if (errors.length > 0) {
        errors.map(error => {

            // add the red borders around current input
            error.target.parentElement.dataset.errorVisible = true

            // get the error container and insert the error msg
            const currentErrorContainer = document.querySelector(`#${error.target.name}Error`)
            currentErrorContainer.textContent = `${error.msg}`

        })
        return false
    }
    
    // no errors, display the success msg 
    form.style.display = 'none'
    formSubmissionSuccess.style.display = 'block'

    // reset the form inputs and success msg after 3s
   
    form.reset()
    return true
}



// EVENT LISTENENERS

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal on click
closeBtn.addEventListener('click', closeModal)
