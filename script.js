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
const lowerCaseLetterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetterBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericalNumbersBank = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharactersBank = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "[", "]", "|", "<", ">", "/"];

//Function generatePassword
function generatePassword(){

  //TODO - Add a "Please enter a number between 8 to 128" popup if passwordLength is not between 8 to 128 characters
  
  var passwordLength = prompt("Please enter length of your password (between 8 to 128 characters", "Enter how many characters you want your password to be"); //Will determine how long password will be
  var lowerCaseLetters = window.confirm("Include lowercase?"); //True or false statement
  var upperCaseLetters = window.confirm("Include uppercase?"); //True or false statement
  var numericalNumbers = window.confirm("Include numerical numbers?"); //True or false statement
  var specialCharacters = window.confirm("Include special characters?"); //True or false statement

  /*16 Outcomes that can happen (lowerCase, upperCase, numerical, special)
  
  1. T T T T done
  2. T F T T done
  3. T T F T done
  4. T F F T done
  5. T T T F done
  6. T F T F done
  7. T T F F done
  8. T F F F done
  9. F T T T done
  10. F F T T done
  11. F T F T done
  12. F F F T done
  13. F T T F done
  14. F F T F done
  15. F T F F done
  16. F F F F done
  */ 


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
  //TODO - Currently the random password is generated with the pattern of lower case, upper case, number, special character. Need to make it completely random.
  //Could maybe come up with a word bank for every scenario and an if statement for every scenario, but that would be too long I think. There has to be a more efficient way. 
  //Create an option string before while loop. Use concat of the two variables. Example of how concat looks - var galaxy = constellations.concat(planets); var galaxy = new variable and constellations and planets were the previous variables.

  var key = true;
  while(intPasswordLength > randomPasswordGenerated.length && key === true)
  {
    var combinedPassword = "";
    //1
    if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == true && specialCharacters == true){
      combinedPasswordBank = lowerCaseLetterBank.concat(upperCaseLetterBank, numericalNumbersBank, specialCharactersBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

    //2  
    if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == true && specialCharacters == true){
      combinedPasswordBank = lowerCaseLetterBank.concat(numericalNumbersBank, specialCharactersBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

    //3
    if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == false && specialCharacters == true){
      combinedPasswordBank = lowerCaseLetterBank.concat(upperCaseLetterBank, specialCharactersBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

    //4
    if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == false && specialCharacters == true){
      combinedPasswordBank = lowerCaseLetterBank.concat(specialCharactersBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

    //5
    if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == true && specialCharacters == false){
      combinedPasswordBank = lowerCaseLetterBank.concat(upperCaseLetterBank, numericalNumbersBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

    //6
    if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == true && specialCharacters == false){
      combinedPasswordBank = lowerCaseLetterBank.concat(numericalNumbersBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }
    
    //7
    if(lowerCaseLetters == true && upperCaseLetters == true && numericalNumbers == false && specialCharacters == false){
      combinedPasswordBank = lowerCaseLetterBank.concat(upperCaseLetterBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

    //8
    if(lowerCaseLetters == true && upperCaseLetters == false && numericalNumbers == false && specialCharacters == false){
      combinedPasswordBank = lowerCaseLetterBank;
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

    //9
    if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == true && specialCharacters == true){
      combinedPasswordBank = upperCaseLetterBank.concat(numericalNumbersBank, specialCharactersBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

     //10
    if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == true && specialCharacters == true){
      combinedPasswordBank = numericalNumbersBank.concat(specialCharactersBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

     //11
    if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == false && specialCharacters == true){
      combinedPasswordBank = upperCaseLetterBank.concat(specialCharactersBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

     //12
    if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == false && specialCharacters == true){
      combinedPasswordBank = specialCharactersBank;
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

     //13
    if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == true && specialCharacters == false){
      combinedPasswordBank = upperCaseLetterBank.concat(numericalNumbersBank);
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

     //14
    if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == true && specialCharacters == false){
      combinedPasswordBank = numericalNumbersBank;
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

     //15
    if(lowerCaseLetters == false && upperCaseLetters == true && numericalNumbers == false && specialCharacters == false){
      combinedPasswordBank = upperCaseLetterBank;
      randomPasswordGenerated += combinedPasswordBank[Math.floor(Math.random() * combinedPasswordBank.length)]; 
    }

    //16
    if(lowerCaseLetters == false && upperCaseLetters == false && numericalNumbers == false && specialCharacters == false){
      window.alert("ERROR: Please select yes to at least one to create your password."); //This message will appear if user clicked cancel to everything. 
      key = false; //Set key to false here so that the window alert will close
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
