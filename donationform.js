function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//checking both passwords

function onBlur()
{
    var x=document.getElementById("fullname");
    x.value=x.value.toUpperCase();
}

function validateForm() {
    // Retrieving the values of form elements 
    var fullname = document.donateForm.fullname.value;
    var email = document.donateForm.email.value;
    
    var type=document.donateForm.type.value;
    var contact = document.donateForm.contact.value;
    var model = document.donateForm.model.value;
    var specify = document.donateForm.specify.value;
	var quantity = document.donateForm.quantity.value;

	var fullnameErr = emailErr  = typeErr = contactErr=modelErr=specifyErr=quanErr=true;
  

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

if(model == "") {
        printError("modelErr", "Please enter details");
    } 
     else{
            printError("modelErr", "");
            modelErr = false;
        }
    

if(specify == "") {
        printError("specifyErr", "Please enter details");
    } 
     else{
            printError("specifyErr", "");
            specifyErr = false;
        }

if(quantity == "") {
        printError("quanErr", "Please enter details");
    } 
     else{
            var q=parseInt(quantity);
            printError("quanErr", "");
            quanErr = false;
        }


 

if((fullnameErr || emailErr ||  contactErr || typeErr||modelErr||specifyErr||quanErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Device details: " + type + " " + model + " " + specify + "\n" +
                          "Quantity: " + q + "\n" +
                          "Receiver Details:"+ "\n" +
                          "Name: " + fullname + "\n" +
                          "Email: " + email + "\n"
                          ;

          alert(dataPreview);

      }


 };
