// Assignment code here

// PseudoCode
// Need so when button is clicked, series of questions are asked to see what should be put in the password

// Quesiton 1 - Length of password (between 8 to 128 characters)

// What character types should be included in my password?

// Question 2 - Include Lower Case?

// Question 3 - Include Upper Case?

// Question 4 - Include Numeric?

// Question 5 - Include special characters?

// At least one of each type should be selected if the answer was yes to the above questions.

// When everything is answered, a password is generated that matches the selected criteria and is either displayed in an alert or written to hte page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var response1 = null;
var response2 = null;

//Function generatePassword
function generatePassword(){
  passwordLength = prompt("Please enter length of your password (between 8 to 128 characters", "Enter how many characters you want your password to be");
  lowerCaseLetters = window.confirm("Include lowercase?");
  upperCaseLetters = window.confirm("Include uppercase?");
  numericalNumbers = window.confirm("Include numerical numbers?");
  specialCharacters = window.confirm("Include special characters?");
  var randomPasswordGenerated = null;

  console.log("Response 1: " + passwordLength);
  console.log("Response 2: " + lowerCaseLetters);
  console.log("Response 3: " + upperCaseLetters);
  console.log("Response 4: " + numericalNumbers);
  console.log("Response 5: " + specialCharacters);



  return [passwordLength, lowerCaseLetters, upperCaseLetters, numericalNumbers, specialCharacters];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("The password is " + password) //Debugging to see what password is

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
