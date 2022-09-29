// Assignment Code - creates a reference to the generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var chars = prompt('How many characters would you like your password to contain?');
  if (chars >= 8 || chars <= 128) { // This code is not working - currently # of chars is unlimited
    generatePassword();
  } else {
    alert("Your number must be between 8 and 128.");
  };
  var password = passwordString(chars);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password); 
  }

// Prompts user to choose what characters to include in the password 
function generatePassword() {
  var specialChar = confirm('Click OK to confirm including special characters.');
  var lowercase = confirm('Click OK to confirm including lowercase characters?');
  var uppercase = confirm('Click OK to confirm including uppercase characters?');
  var numbers = confirm('Click OK to confirm including numbers?');
  var userInput = [specialChar, lowercase, uppercase, numbers];
  passwordString();

}
// Creates the random string based on chars input and length
// Need to adjust this code to allow for userInput elements to be False (i.e. no special characters, etc.)
function passwordString(length, chars) {
  var result = '';
  var charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_'
                                  // var num = '0123456789';
                                  // var lcase = 'abcdefghijklmnopqrstuvwxyz'
                                  // var ucase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                                  // var char = '!@#$%^&*()_'
                                  // var charset = [num,lcase, ucase, char];
for (var i = 0; i < length; i++)
    result += charset[Math.floor(Math.random() * charset.length)];
  return result;
}




///////////////////////////////////////////////////////////////////////
// pseudo code:
// gather user input on password requirements
  //input for # of characters
  //input for special characters
  //input for lowercase characters
  //input for uppercase characters
  //input for numbers
// Validate user input between 8 and 128
  // if it's not, ask them to provide an input between 8 and 128
  // include what was true
// Decide how to choose what characters to include
// Randomly (Math.random) grab values from each included categories
// Assemble password string to be returned