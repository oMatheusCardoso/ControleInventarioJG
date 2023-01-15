/*firebase.auth().onAuthStateChanged(function(user) {
    if (user){
        window.location.href = "scan.html";
    }

})
*/
function onChangeEmail(){
    //const email = document.getElementById("email").value;
    //if (!email) {
    //    document.getElementById("recuperar").disabled = true;
    //} else if (validateEmail(email)) {
    //    document.getElementById("recuperar").disabled = false;
    //} else {
    //    document.getElementById("recuperar").disabled = true;
    //}  

    toggleEmailErrors();


}
function onChangePassword(){

   

}

function isEmailValid(){
    const email = form.email().value;
    if (!email){
        return false;
    } 
        return validateEmail(email);
    
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);

}

function isPasswordValid(){
    const password = form.password().value;
    if (!password){
        return false;
    } 
        return true;
    
    

}

function toggleEmailErrors(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailPasswordInvalidError().style.display = isEmailValid(!email) ? "none" : "block";

   /* if (!email){
        form.emailRequiredError().style.display = 'block';
    } else {
        form.emailRequiredError().style.display = 'none';
    }

    if (isEmailValid(!email))  {
        form.emailPasswordInvalidError().style.display = 'none';
    } else {
        form.emailPasswordInvalidError().style.display = 'block';
    }*/
    
}   
function login(){
    firebase.auth().signInWithEmailAndPassword
    (form.email().value, form.password().value
    ).then(response => {
         window.location.href = "scan.html";
    }).catch(error => {
         alert(getErrorMessage(error));
    });
    

    // window.location.href = "scan.html";
}

function getErrorMessage(error){
    if (error.code == "auth/user-not-found"){
        return "Usuário não encontrado. Peça ao usuário administrador para realizar o cadastro.";
    }
    return error.message;
}

/*function togglePasswordErrors(){
    const password = form.password().value;
    form.passwordRequired().style.display = !password ? "block" : "none";

    if (!password){
        form.passwordRequired().style.display = 'block';
    } else { 
        form.passwordRequired().style.display = 'none';
    }
}


/*function toggleButtonsDisabled(){
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;
   
    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;


}*/

var input = document.getElementById("password");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("entrar").click();
  }
});

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    emailPasswordInvalidError: () => document.getElementById('email-senha-incorreta'),
    emailRequiredError: () => document.getElementById('email-necessario'),
    loginButton: () => document.getElementById('entrar'),
    passwordRequired:() => document.getElementById('senha-necessaria'),
    recoverPasswordButton: () => document.getElementById('recuperar')

}