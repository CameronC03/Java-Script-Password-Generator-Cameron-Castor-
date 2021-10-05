// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var special = "*&^%$#@!?><{}"
var collectionOfValids = [];

function generatePassword () {
  var passwordLength = prompt("Enter how many characters you would like your password to be 8-128 characters.");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert ("error. Choice is not valid try again.");
    return;
  }
}

var UpperCaseL = prompt("Do you want your password to have uppercase letters?");
if (UpperCaseL === true) {
  for (var i = 0; i < upperCase.length; i++) {
    collectionOfValids.push(upperCase[i]);
    
  }
}

var lowerCaseL = prompt("Do you want your password to have lowercase letters?");
if (lowerCaseL === true) {
  for (var i = 0; i < lowerCase.length; i++) {
    collectionOfValids.push(lowerCase[i]);


  }
}

var numberChar = prompt("Do you want to include numbers in your password?");
if (numberChar === true) {
  for (var i = 0; i < number.length; i++) {
    collectionOfValids.push(number[i]);
  }
}

var specialChar = prompt("Do you want to include Special letters in your password?");
if (specialChar === true) {
  for (var i = 0; i < special.length; i++) {
    collectionOfValids.push(special[i]);
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
