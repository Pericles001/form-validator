document.getElementById('firstName').addEventListener('blur', validateFN)

function validateFN(){
    const firstName = document.getElementById('firstName');
    const re = /^[a-zA-Z]{2,8}$/
    console.log('validate')
    if(!re.test(firstName.value)){
        firstName.classList.add('is-invalid')
    }
}