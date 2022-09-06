function openWin()
{
	window.open('register.html')
}


function login()
{
var username= document.loginform.username.value;
var password= document.loginform.password.value;
var option=document.getElementById('s1').value;
var userErr=passErr=optErr=true;
if(username == "") {
        alert("Enter email id");
    } else {
        var regex = /^\S+@\S+\.\S+$/;                
        if(regex.test(username) === false) {
            alert("Enter proper email id")
        } else {
            userErr=false;
     
     }
 }

if(password == "") {
        alert("Enter password");
    }
else
{
	passErr=false;
}

if(option == "")
{
  alert("Select Option");
}
else
{
  optErr=false;
}

if((userErr || passErr || optErr) == false)
{
   SelectRedirect();
}
}


function onmouseOver()
{
document.getElementById("title").style.color="#21959c";	
}


function onmouseOut()
{
document.getElementById("title").style.color="black";	
}

function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
 alert(text);
}


function onReset()
{
	alert("The form was reset");
}


function onBlur()
{
	var x = document.getElementById("username");
  x.value = x.value.toLowerCase();
}


function onMousedown(x)
{
	x.style.height = "80px";
  x.style.width = "80px";
}



function SelectRedirect(){

switch(document.getElementById('s1').value)
{
case "Admin":
window.open("admindash.html")
break;

case "NGO":
window.open("ngodash.html")
break;

case "Donor":
window.open("donordash.html")
break;


}// end of switch 
}