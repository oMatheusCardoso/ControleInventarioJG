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
}   
function login(){
    firebase.auth().signInWithEmailAndPassword
    (form.email().value, form.password().value
    ).then(response => {
        window.location.href = "home.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error){
    if (error.code == "auth/user-not-found"){
        return "Usuário não encontrado. Peça ao usuário administrador para realizar o cadastro.";
    }
    return error.message;
}

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