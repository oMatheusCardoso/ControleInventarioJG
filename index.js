// function isEmailValid(){
//     const email = form.email().value;
//     if (!email){
//         return false;
//     } 
//         return validateEmail(email);
    
// }

// function isPasswordValid(){
//     const password = form.password().value;
//     if (!password){
//         return false;
//     } 
//         return true;
// }

// function toggleEmailErrors(){
//     const email = form.email().value;
//     form.emailRequiredError().style.display = email ? "none" : "block";
//     form.emailPasswordInvalidError().style.display = isEmailValid(!email) ? "none" : "block";
// }   



function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);

}

function getErrorMessage(error){

    if (error.code == "auth/user-not-found"){
        return "Usuário não encontrado. Peça ao usuário administrador para realizar o cadastro.";
    }
    

    if (error.code == "auth/missing-email") {
        return "Preencha o campo com o email que será redefinido a senha!"
    }

    if (error.code == "auth/invalid-email") {
        return "Email com formato incorreto!"
    }
    if (error.code == "auth/internal-error") {
        return "Error ao logar! Verifique o email ou senha!"
    }

    if (error.code == "auth/wrong-password") {
        return "Email ou senha inválido!"
    }
    if (error.code == "auth/too-many-requests") {
        return "Foram feito muitas tentativas de login! Por favor tente novamente em alguns minutos ou faça o reset de sua senha!"
    }

    return error.message;
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

var input = document.getElementById("password");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("entrar").click();
}
});

function recoveryPassword(){
    firebase.auth().sendPasswordResetEmail(form.email().value).then (() => {
        alert("Você receberá um email para redefinir a senha!")
    }).catch(error => {
        alert(getErrorMessage(error))
        });
}

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    emailPasswordInvalidError: () => document.getElementById('email-senha-incorreta'),
    emailRequiredError: () => document.getElementById('email-necessario'),
    loginButton: () => document.getElementById('entrar'),
    passwordRequired:() => document.getElementById('senha-necessaria'),
    recoverPasswordButton: () => document.getElementById('recuperar')

}

