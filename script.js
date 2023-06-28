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

//Below are every character possible that my password can use.
const lowerCaseLetterBank = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetterBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericalNumbersBank = "0123456789";
const specialCharactersBank = "!@#$%^&*()_+~[]|<>/\-=";

//Function generatePassword
function generatePassword(){

  //TODO - Add a "Please enter a number between 8 to 128" popup if passwordLength is not between 8 to 128 characters
  
  var passwordLength = prompt("Please enter length of your password (between 8 to 128 characters", "Enter how many characters you want your password to be"); //Will determine how long password will be
  var lowerCaseLetters = window.confirm("Include lowercase?"); //True or false statement
  var upperCaseLetters = window.confirm("Include uppercase?"); //True or false statement
  var numericalNumbers = window.confirm("Include numerical numbers?"); //True or false statement
  var specialCharacters = window.confirm("Include special characters?"); //True or false statement


  var randomPasswordGenerated = ""; //Empty password to keep adding onto. Length here will be 0.
  var intPasswordLength = parseInt(passwordLength); //Used to make the passwordLength from string to a number

  // console.log("Response 1: " + passwordLength);
  // console.log(typeof passwordLength);
  // console.log(typeof intPasswordLength);
  // console.log("Response 2: " + lowerCaseLetters);
  // console.log("Response 3: " + upperCaseLetters);
  // console.log("Response 4: " + numericalNumbers);
  // console.log("Response 5: " + specialCharacters);
 
  // Below while statement will generate the password based on choices the user made
  while(intPasswordLength > randomPasswordGenerated.length)
  {
    if(lowerCaseLetters == true){
      randomPasswordGenerated += lowerCaseLetterBank[Math.floor(Math.random() * lowerCaseLetterBank.length)]; //Will add lower case if user clicked okay
    }

    if(upperCaseLetters == true){
      randomPasswordGenerated += upperCaseLetterBank[Math.floor(Math.random() * upperCaseLetterBank.length)]; //Will add upper case if user clicked okay
    }

    if(numericalNumbers == true){
      randomPasswordGenerated += numericalNumbersBank[Math.floor(Math.random() *numericalNumbersBank.length)]; //Will add numbers if user clicked okay
    }

    if(specialCharacters == true){
      randomPasswordGenerated += specialCharactersBank[Math.floor(Math.random() * specialCharactersBank.length)]; //Will add special characters if user clicked okay
    }

    if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == false && specialCharacters == false){
      window.alert("ERROR: Please select yes to at least one to create your password."); //This message will appear if user clicked cancel to everything. 

      //TODO - Need to figure out how to make message go away.
    }

  }



  return [randomPasswordGenerated];
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
