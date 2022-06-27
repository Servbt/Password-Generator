    // 1. present with a series of prompts/criteria

    // 2. validate input and at least one character type is selected

    // 3. generate the password

    // 4.  display the password on the page




// targets html ID with a variable known as "generateBtn"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
  var passLength = prompt("please choose between 8 and 128 characters...")

  function generatePassword() {
    var lowCase = confirm("would you like your password to include lowercase words?");
    var upCase = confirm("what about upper case letters?");
    var numbers = confirm("are numbers okay to put in there?");
    var speChar = confirm("and finally, special characters???");
    console.log("confirm prompts");

    return "password will go here";
  }

  if (passLength <= 7 || passLength >= 129 ) {
    alert("please choose a proper value...");
    console.log("proper value kickback");
  } else if (passLength > 7 || passLength < 129 ) {
    console.log("it worked");
    
  }
    
  
}

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);
