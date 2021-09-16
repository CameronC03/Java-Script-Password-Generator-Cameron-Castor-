// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numberChar =  "0123456789";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength1;
var special;
var number;
var uppercase;

//function is used to pick the length of the password
function passwordlength(){
  passwordlength = prompt("Choose how many characters you want your password to have (8-128 charactrers): ");
  if (passwordlength<8){
    alert("Password must be between 8-128 characters");
    passwordLength();
  }else if (passwordLength1>128){
    alert("Password must be between 8-128 characters");
    passwordLength();
  }else{
    alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength;
   

  }


}
  }


}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
