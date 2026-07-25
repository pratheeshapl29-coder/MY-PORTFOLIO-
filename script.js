
function darkmode(){
    document.body.style.background="black";
    document.body.style.color="white"
}
function welcome(){
    alert("Welcome to my porfolio😊")
}
function validateform(){

let name=document.getElementById("name").Value;
let email=document.getElementById("email").value;
if(name==""){
alert("please enter your name");;
return false;

}
if(email==""){
   alert("please enter your email");
   return false; 
   
}
alert("form submitted successfully");
 return true;
}