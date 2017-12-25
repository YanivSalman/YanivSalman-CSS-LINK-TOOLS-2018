//6
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAVGxfARmW0T7EHKH90sfrA0NZLjHKhHII",
    authDomain: "firebulma1.firebaseapp.com",
    databaseURL: "https://firebulma1.firebaseio.com",
    projectId: "firebulma1",
    storageBucket: "",
    messagingSenderId: "1085679713048"
  };
  firebase.initializeApp(config);
  //7
  var UserRef = firebase.database().ref('messages');

//1
document.getElementById('fireForm').addEventListener('submit',submitUser);

//2
function submitUser(e){
    e.preventDefault();
//4
var user = val('user');
var email = val('email');
var textarea = val('textarea');

Smessage(user, email, textarea);

document.querySelector('.thanks').style.display="block";
setTimeout(function(){
    document.querySelector('.thanks').style.display="none";
   
},1300);

document.getElementById("fireForm").reset();

}
//3
function val(id){
    return document.getElementById(id).value;
}

function Smessage(user,email,textarea){
    var newUserRef = UserRef.push();
    newUserRef.set(
        {
           user: user,
           email: email,
           textarea: textarea
        
        });
}
