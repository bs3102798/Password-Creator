// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
];
​
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
​
// Array of lowercase characters to be included in password
var lowerCased = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
​
var upperCased = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];
 

function getRandomCharacter(Array){
  var randomIndex = Math.floor(Math.random() * Array.length);
  var randomPasswordChar = array [randomIndex];
  return randomPasswordChar;

}

function gereratePassword(){
  var withpasswordLength = prompt ("How many character should the passwrd be?");
  var withSpecialChar = confirm ("Do you want special characters?");
  var withUpperCase = confirm ("Do you want upperCase letters?");
  var withLowerCase = confirm ("Do you want lowercase letters?");
  var withNumbers = confirm("Do you want numbers?")


  
   var passwordOptions = {
    withpasswrdLength: withpasswordLength,
    withSpecialChar: withSpecialChar,
    withLowerCase: withLowerCase,
    withUpperCase:withUpperCase,
    withNumbers: withNumbers

  };

  var  possiblePasswordChars = [];
  var password = [];

  if (passwordOptions. specialCharacters){
    possiblePasswordChars= possiblePasswordChars.concat(specialCharacters);
    var randomChar = getRandomCharacter(specialCharacters);
    password.puch(randomChar); 
    

    
  }
  if (passwordOptions. hasUpperCase){
    possiblePasswordChars= possiblePasswordChars.concat(hasUpperCase);
    var randomChar = getRandomCharacter(hasUpperCase);
    password.puch(randomChar); 
    }
    if (passwordOptions. withNumbers){
      possiblePasswordChars= possiblePasswordChars.concat(withNumbers);
      var randomChar = getRandomCharacter(withNumbers);
      password.puch(randomChar); 
      }
      if (passwordOptions. withLowerCase){
        possiblePasswordChars= possiblePasswordChars.concat(withLowerCase);
        var randomChar = getRandomCharacter(wothLowerCase);
        password.puch(randomChar); 
        }

       for (var i = 0; i < passwordOptions.length - password. length; i++) {
        var randomChar = getRandomCharacter(possiblePasswordChars);
        password.push(randomChar)
       }
      }
    


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lenght = 10;


  for (var i = 0, generatePassword; i <lenght; ++i){
    var newpassword = generatePassword(getRandomCharacter);
    password.push(writePassword)

  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

 

 writePassword();