let form = document.getElementById('send-message')
form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false){
        event.preventDefault()
        event.stopPropagation()
    }
    form.classList.add('my-validated')
})