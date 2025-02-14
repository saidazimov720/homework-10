function numberGenerator(count) {
    var phoneNumbers = [];
    while (phoneNumbers.length < count) {
        var phoneNum = '+998 ' +
            (Math.floor(Math.random() * 90 + 10)).toString().padStart(2, '0') + ' ' +
            (Math.floor(Math.random() * 900 + 100)).toString().padStart(3, '0') + ' ' +
            (Math.floor(Math.random() * 90 + 10)).toString().padStart(2, '0') + ' ' +
            (Math.floor(Math.random() * 90 + 10)).toString().padStart(2, '0');
        if (phoneNumbers.indexOf(phoneNum) === -1) {
            phoneNumbers.push(phoneNum);
        }
    }
    return phoneNumbers;
}

function generateNum(count, max) {
    var numbers = [];
    while (numbers.length < count) {
        var number = Math.floor(Math.random() * max);
        if (numbers.indexOf(number) === -1) {
            numbers.push(number);
        }
    }
    return numbers;
}

var generatedNumbers = numberGenerator(500);
console.log("Generated phone numbers: ", generatedNumbers);

function checkPhoneNum(userPhoneNum) {
    if (generatedNumbers.indexOf(userPhoneNum) !== -1) {
        console.log("Phone number matched: Go to next step");
        return true;
    } else {
        console.log("Phone number not matched");
        return false;
    }
}

function checkNum(userNum) {
    var generatedNumbers = generateNum(30, 300);
    console.log("Generated numbers:", generatedNumbers);
    var match = false;
    for (var i = 0; i < userNum.length; i++) {
        if (generatedNumbers.indexOf(userNum[i]) !== -1) {
            match = true;
            break;
        }
    }
    if (match) {
        console.log("You win!");
    } else {
        console.log("You lose, XaXaXaXaXaXaXaXa");
    }
}

var userNumber = prompt("Enter your phone number: +998 xx xxx xx xx");
var phoneNumberMatch = checkPhoneNum(userNumber);

if (phoneNumberMatch) {
    var userInput = prompt("Enter any six numbers with comma:");
    var userInputNumber = userInput.split(',').map(function (num) { return parseInt(num); });
    checkNum(userInputNumber);
}
