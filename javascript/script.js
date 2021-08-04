var enterName = prompt('inserisci nome');
var enterSurname = prompt ('inserisci cognome');
var favoriteColor = prompt('inserisci colore preferito');
var numero = 21
document.getElementById('password').innerHTML =  enterName + enterSurname + favoriteColor + numero;

document.getElementById('enterName').innerHTML = "nome:" + enterName;
document.getElementById('enterSurname').innerHTML = "cognome:" + enterSurname;
document.getElementById('favoriteColor').innerHTML = "colore preferito:" + favoriteColor;