function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validate()  
{
var fullname=document.reqForm.fullname.value;
var email=document.reqForm.email.value;
var contact=document.reqForm.contact.value;

//concat method
var type=document.reqForm.type.value;
var specify=document.reqForm.specify.value;
var requirement=type.concat(" ",specify);

var date=new Date();

var fullnameErr=emailErr=contactErr=typeErr=specifyErr=true;

if(fullname == "") {
        printError("fullnameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fullname) === false) {
            printError("fullnameErr", "Please enter a valid name");
        } else {
            printError("fullnameErr", "");
            fullnameErr = false; 
     
     }
 }



 if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }



    if(contact == "") {
        printError("contactErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{11}$/;
        if(regex.test(contact) == false) {
            printError("contactErr", "Please enter a valid 10 digit mobile number with country code");
        } else{
            printError("contactErr", "");
            contactErr = false;
        }
    }


if(type== "") {
        printError("typeErr", "Please select your type");
    } else {
        printError("typeErr", "");
        typeErr = false;
    }


    if(specify == "") {
        printError("specifyErr", "Please enter details");
    } 
     else{
            printError("specifyErr", "");
            specifyErr = false;
        }

if((fullnameErr || emailErr || contactErr || specifyErr||typeErr) == true) {
       return false;
    } else {

var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + fullname + "\n" +
                          "Email Address: " + email + "\n" +
                          "Contact Number: " + contact + "\n" +
                          "Type: " + type + "\n" + 
                          "Requirement: " + requirement + "\n" +
                          "You have submitted this form on: " + date;
                          
	alert(dataPreview);
	}
};

//toLowerCase
function onBlur()
{
var x = document.getElementById("email");
  x.value = x.value.toLowerCase();
}