//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let user_name="shalu12@gmail.com";
let password="12345";

let enter_name="shalu12@gmail.com";
let enter_password="12345";

if(enter_name==user_name){
  
  if(enter_password==password){
    
    console.log("Hey , you are logged in");
  }
  else{
    console.log("Wrong password");
  }
  
  }
else{
  console.log("Wrong user name or email");
}
  

