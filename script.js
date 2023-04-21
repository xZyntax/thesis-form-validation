// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  const buttonShowHide = document.querySelector('#showHide');

  buttonShowHide.addEventListener("click", (e) =>{

        e.preventDefault();
      var inputPass = document.querySelector("#validationCustom02");

      if(inputPass.type === "password"){

          inputPass.type === "text"
      }else{

        inputPass.type === "password";
      }

  })