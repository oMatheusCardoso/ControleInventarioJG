/*firebase.auth().onAuthStateChanged(function(user) {
    if (user){
        window.location.href = "scan.html";
    }

}) */



// function logout(){
//     firebase.auth().signOut().then(() => {
//         window.location.href = "index.html";
//     }).catch(() => {
//         alert('Erro ao fazer logout!')
//     });
// }

var input = document.getElementById("findID");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("find").click();
  }
});