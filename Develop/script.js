// Assignment Code - creates a reference to the generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var chars = prompt('How many characters would you like your password to contain?');
  if (chars >= 8 && chars <= 128) { 
    generatePassword();
  } else {
    alert("Your number must be between 8 and 128.")
    writePassword();
  };
  var password = generatePassword(chars);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password); 
  }

// Prompts user to choose what characters to include in the password 
function generatePassword(length, chars) {
  var specialChar = confirm('Click OK to confirm including special characters.'); 
  var lowercase = confirm('Click OK to confirm including lowercase characters.');
  var uppercase = confirm('Click OK to confirm including uppercase characters.');
  var numbers = confirm('Click OK to confirm including numbers.');
  
  // Creates the random string based on chars input and length
  var result = '';
  var charset = '';
  var nums = '0123456789';
  var lcase = 'abcdefghijklmnopqrstuvwxyz';
  var ucase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var syms = '!@#$%^&*()_';
  if (numbers) {
    charset += nums;
  }
  if (lowercase) {
    charset += lcase;
  }
  if (uppercase) {
    charset += ucase;
  }
  if (specialChar) {
    charset += syms;
  }
  // else if (charset = '')
for (var i = 0; i < length; i++)
    result += charset[Math.floor(Math.random() * charset.length)];
  return result;
}



  // var charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_'

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