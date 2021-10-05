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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
