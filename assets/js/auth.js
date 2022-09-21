// not suppose to be actual security :')

let auth_key = "auth_key";
// localStorage.setItem(auth_key, 'false');

var password = "1234";

if (auth_key in localStorage){
} else {
  localStorage.setItem(auth_key, 'false');
}

while (localStorage.getItem(auth_key) == 'false'){
  password = prompt("Password");
  if (password=="1234") {
    localStorage.setItem(auth_key, 'true');
     $("body").removeClass("d-none");
  } else {
    alert("Incorrect password");
  }
}
$("body").removeClass("d-none");
