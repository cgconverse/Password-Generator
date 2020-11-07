var generateBtn = document.querySelector("#generate");

alert("Welcome to Password Generator! To begin, click the Generate Password button.")

// 'Generate Password' button
generateBtn.addEventListener("click", createPassword);

// This function displays the new password in the password text area.
function createPassword() {
    var password = generatePassword();
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var Char = "!')(*+,-.$/:;<=>%&?@[#\]^_`{|}~";
    var num = "0123456789";
    var passwordText = []
    var result = []
    upperCase = upperCase.split("")
    lowerCase = lowerCase.split("")
    Char = Char.split("")
    num = num.split("")
    passwordText.value = password;

    
    //The following prompts and confirms determine which criteria to include in the user's password
    var pwLength = prompt("Choose how long you want your password to be between 8-128 characters.")

    
    if (pwLength < 8 && pwLength > 128) {
        alert("Password should be between 8 and 128 characters")
    }
    if (confirm("Would you like to include upper case letters?")) {
        for (var i = 0; i < upperCase.length; i++) {
            result.push(upperCase[i])
        }
        if (confirm("Would you like to include lower case letters?")) {
            for (var i = 0; i < lowerCase.length; i++) {
                result.push(lowerCase[i])
            }
        }
    }
    
    if (confirm("Would you like to include numbers?")) {
        for (var i = 0; i < num.length; i++) {
            result.push(num[i])
        }
    }
    
    if (confirm("Would you like to include special characters?")) {
        for (var i = 0; i < Char.length; i++) {
            result.push(Char[i])
        }

    }

    generatePassword(result, pwLength)
}

//This function generates the password according to the user's selected criteria.
function generatePassword(characterCatcher, pwLength) {

    var password = ""
    for (var i = 0; i < pwLength; i++) {
        password += characterCatcher[Math.floor(Math.random() * characterCatcher.length)]
    }
    
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}