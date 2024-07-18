function numberGenerator(params) {
    var phoneNumbers = [];
    while (phoneNumbers.length < count) {
        var phoneNum = '+998' +
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
    return number;
}

var generatedNumber = numberGenerator(500);
console.log("Generated phone numbers: ", generatedNumber);

function checkPhoneNum(userPhoneNum) {
    if (generatedNumber.indexOf(userPhoneNum) !== -1) {
        console.log("Phone number mathed: Go to next step");
        return true;
    } else {
        console.log("Phone number not match");
        return false;
    }
}

function checkNum(userNum) {
    var generatedNumbers = generateNum(30, 300);
    console.log("Generated numbers:", generatedNumbers);
    var match = false;
    for (let i = 0; i < userNum.length; i++) {
        if (generatedNumbers.indexOf(userNum[i]) !== -1) {
            match = true;
            break;
        }

    }
    if (match) {
        console.log("You win!");
    }else{
        console.log("You loossee,  XaXaXaXaXaXaXaXa");
    }
}

