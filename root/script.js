

var verifyenter;
var verifyNumber;
var verifyCharacter;
var verifyUppercase;
var verifyLowercase;

specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

alphabetical = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};

alpha2 = alphabetical.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  pw = generatePassword();
  document.getElementById("password").placeholder = pw;
});

function generatePassword() {

  enterbutton = parseInt(prompt("How many characters would you like your password to have? Choose between 8 and 128"));

  if (!enterbutton) {
    alert("Value is needed to proceed!");
  } else if (enterbutton < 8 || enterbutton > 128) {

    enterbutton = parseInt(prompt(" Must be between 8 and 128 no more no less"));

  } else {

    verifyNumber = confirm("Do you want this to contain numbers?");
    verifyCharacter = confirm("Do you want this to contain special characters?");
    verifyUppercase = confirm("Do you want this to contain Uppercase letters?");
    verifyLowercase = confirm("Do you want this to contain Lowercase letters?");
  };


  if (!verifyCharacter && !verifyNumber && !verifyUppercase && !verifyLowercase) {
    choices = alert("This needs to have a credential!");

  }

  else if (verifyCharacter && verifyNumber && verifyUppercase && verifyLowercase) {

    choices = specialCharacter.concat(numbers, alphabetical, alpha2);
  }

  else if (verifyCharacter && verifyNumber && verifyUppercase) {
    choices = specialCharacter.concat(numbers, alpha2);
  }
  else if (verifyCharacter && verifyNumber && verifyLowercase) {
    choices = specialCharacter.concat(numbers, alphabetical);
  }
  else if (verifyCharacter && verifyLowercase && verifyUppercase) {
    choices = specialCharacter.concat(alphabetical, alpha2);
  }
  else if (verifyNumber && verifyLowercase && verifyUppercase) {
    choices = numbers.concat(alpha, alpha2);
  }

  else if (verifyCharacter && verifyNumber) {
    choices = specialCharacter.concat(numbers);

  } else if (verifyCharacter && verifyLowercase) {
    choices = specialCharacter.concat(alphabetical);

  } else if (verifyCharacter && VerifyUppercase) {
    choices = specialCharacter.concat(alpha2);
  }
  else if (verifyLowercase && VerifyNumber) {
    choices = alphabetical.concat(numbers);

  } else if (verifyLowercase && verifyUppercase) {
    choices = alphabetical.concat(alpha2);

  } else if (verifyNumber && verifyUppercase) {
    choices = numbers.concat(alpha2);
  }

  else if (verifyCharacter) {
    choices = specialCharacter;
  }
  else if (verifyNumber) {
    choices = numbers;
  }
  else if (verifyLowercase) {
    choices = alphabetical;
  }



  var password = [];

  for (var i = 0; i < enterbutton; i++) {
    var pickCharacters = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickCharacters);
  }

  var pw = password.join("");
  writePassword(pw);
  return pw;
}

function writePassword(pw) {
  document.getElementById("password").textContent = pw;

}