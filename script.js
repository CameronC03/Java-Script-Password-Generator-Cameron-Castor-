// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// chars that are available to use 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var number = "0123456789" .split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz" .split("");
var special = "*&^%$#@!?><{}" .split("");
var collectionOfValids = [];

function generatePassword () {
  // prompt to choose length of password
  var passwordLength = prompt("Enter how many characters you would like your password to be 8-128 characters.");

  var lengthConfirm = parseInt(passwordLength);
  console.log(lengthConfirm);
// gives option of how manu characters you wanna use
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert ("error. Choice is not valid try again.");
    return;
  }

// uppercase prompt
var UpperCaseL = confirm("Do you want your password to have uppercase letters?");
if (UpperCaseL === true) {
  for (var i = 0; i < upperCase.length; i++) {
    collectionOfValids.push(upperCase[i]);
    
  }
}
// lowercase prompt
var lowerCaseL = confirm("Do you want your password to have lowercase letters?");
if (lowerCaseL === true) {
  for (var i = 0; i < lowerCase.length; i++) {
    collectionOfValids.push(lowerCase[i]);


  }
}
// number promt
var numberChar = confirm("Do you want to include numbers in your password?");
if (numberChar === true) {
  for (var i = 0; i < number.length; i++) {
    collectionOfValids.push(number[i]);
  }
}
// special character promt
var specialChar = confirm("Do you want to include Special letters in your password?");
if (specialChar === true) {
  for (var i = 0; i < special.length; i++) {
    collectionOfValids.push(special[i]);
  }
}
// creat a random passowrd 
var randomPass = "";
for (var i = 0; i < lengthConfirm; i++) {
  collectionOfValids[
    Math.floor(Math.random() * collectionOfValids.length)];
    randomPass += 
    collectionOfValids[
      Math.floor(Math.random() * collectionOfValids.length)
    ];
  
}
return randomPass;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
