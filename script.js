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

function generatePassword () {
  var passwordLength = prompt("Enter how many characters you would like your password to be 8-128 characters.");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert ("error. Choice is not valid try again.");
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
