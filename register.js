function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//checking both passwords
function matchPassword() {  
  var password =  document.contactForm.password.value; 
  var cpassword = document.contactForm.cpassword.value;  
  if(password != cpassword)  
  {   
    printError("cpasswordErr","Passwords did not match");  
  } else {  
    printError("cpasswordErr","") ;
    cpasswordErr=false;

  }  
}

function onChange(radio)
{
alert(radio.value)
}


function validateForm() {
    // Retrieving the values of form elements 
    var fullname = document.contactForm.fullname.value;
    var email = document.contactForm.email.value;
    var password=document.contactForm.password.value;
    var cpassword=document.contactForm.cpassword.value;
    var type=document.contactForm.type.value;
    var contact = document.contactForm.contact.value;
    var house = document.contactForm.house.value;
    var city = document.contactForm.city.value;
	var state = document.contactForm.state.value;
	var pincode = document.contactForm.pincode.value;
	var country = document.contactForm.country.value;

	var fullnameErr = emailErr = passwordErr = cpasswordErr = typeErr = contactErr=houseErr=cityErr=stateErr=pincodeErr=countryErr=true;
  

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
   
	if(password == "") {
        printError("passwordErr", "Please enter your password");
    } 
	else{
    if(password.length<8)
    {
    	printError("passwordErr","Please enter a password of atleast 8 digits");
    }
     	else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }
    
if(cpassword == "") {
        printError("cpasswordErr", "Please enter your password");
    } 
    else{
    if(cpassword.length<8)
    {
    	printError("cpasswordErr","Please enter a password of atleast 8 digits");
    }

     else {
     		matchPassword();
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

if(house == "") {
        printError("houseErr", "Please enter details");
    } 
     else{
            printError("houseErr", "");
            houseErr = false;
        }
    

if(city == "") {
        printError("cityErr", "Please enter details");
    } 
     else{
            printError("cityErr", "");
            cityErr = false;
        }

if(state == "") {
        printError("stateErr", "Please enter details");
    } 
     else{
            printError("stateErr", "");
            stateErr = false;
        }


 if(country == "") {
        printError("countryErr", "Please enter details");
    } 
     else{
            printError("countryErr", "");
            countryErr = false;
        }


if(pincode == "") {
        printError("pincodeErr", "Please enter details");
    } 
    else {
        var regex = /^[1-9]\d{5}$/;
        if(regex.test(pincode) === false) {
            printError("pincodeErr", "Please enter a valid pincode");
        }

     else{
            printError("pincodeErr", "");
            pincodeErr = false;
        }
    }

if((fullnameErr || emailErr || passwordErr || cpasswordErr|| contactErr || houseErr||stateErr||cityErr||pincodeErr||countryErr || typeErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + fullname + "\n" +
                          "Email Address: " + email + "\n" +
                          "Contact Number: " + contact + "\n" +
                          "Type: " + type + "\n" +
                          "Address: " + house +  "," + city + "," + state + "," + pincode + "," + country 
                          ;

          alert(dataPreview);

      }


 };
