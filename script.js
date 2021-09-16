// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numberChar =  "0123456789";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength1;
var special1;
var number1;
var uppercase1;

//function is used to pick the length of the password
function passwordLength(){
  passwordLength1 = prompt("Choose how many characters you want your password to have (8-128 charactrers): ");
  
  if (passwordLength1<8){
    alert("Password must be between 8-128 characters");
    passwordLength();
  
  }else if (passwordLength1>128){
    alert("Password must be between 8-128 characters");
    passwordLength();
  
  }else if (isNaN(passwordLength1)){
    alert("Password length must be a number between 8-128 characters");
    passwordLength();
  
  }else{
    alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength1;
   
    
  }
  //Function is used to see if the user wants uppercase letters
  function uppercase(){
    uppercase1 = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercase1 = uppercase1.toLowerCase();
    
    if (uppercase1 === null || uppercase1 === ""){
    alert("Answer Yes or No");
    uppercase();

  }else if (uppercase1 === "yes" || uppercase1 ==="y"){
    uppercase1 = true;
    return uppercase1;
  
  }else if (uppercase1 === "no" || uppercase1 ==="n"){
    uppercase1 = false;
    return uppercase1;
  
  }else {
    alert("Answer Yes or No");
    uppercase();
  }
  return uppercase1;
}

  function numbers(){
    number1 = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    number1 = number1.toLowerCase();

    //this function lets the user choose if they want numbers
    if (number1 === null || number1 === ""){
      alert("Answer Yes or No");
      numbers();

    }else if (number1 === "yes" || number1 ==="y"){
      number1 = true;
      return number1;

    }else if (number1 === "no" || number1 ==="n"){
      numbers1 = false;
      return number1;
    
    }else {
      alert("Answer Yes or No");
      numbers();
    }
    return number1;
}

  //function is used to see if the user wants special characters
 function special(){
    special1 = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    special1 = special1.toLowerCase();

    if (special1 === null || special1 === ""){
      alert("Answer Yes or No");
      special();

    }else if (special1 === "yes" || special1 ==="y"){
      special1 = true;
      return special1;

    }else if (special1 === "no" || special1 ==="n"){
      special1 = false;
      return special1;
    
    }else {
      alert("Answer Yes or No");
      special();
    }
    return special1;
}

function generatePassword(){
  passwordLength();
  console.log(passwordLength1);
  uppercase();
  console.log(uppercase1);
  numbers();
  console.log(number1);
  special();
  console.log(special1);

  var characters = lowercaseChar;
var password = "";
if (uppercase1 && number1 && special1){
  characters += uppercaseChar + number1 + special1;

}else if (uppercase1 && number1){
  characters += uppercaseChar + numberChar;

}else if (number1 && special1){
  characters += numberChar + specialChar;

}else if (uppercase1 && special1){
  characters += uppercaseChar + specialChar;

}else if (uppercase1){
  characters += uppercaseChar;

}else if(number1){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

for(var i = 0; i < passwordLength1; i++){
  password += characters.charAt(Math.floor(Math.random() * characters.length));
}
return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = generatePassword();
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;

 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
