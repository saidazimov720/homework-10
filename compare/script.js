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
        var number = Math.floor(Math.random()*max);
        if (numbers.indexOf(number) === -1) {
            numbers.push(number);
        }
    }
    return number;
}

var generatedNumber = numberGenerator(500);
console.log("Generated phone numbers: ", generatedNumber);

function checkNum(userNum) {
    if (generatedNumber.indexOf(userNum) !== -1) {
        console.log("Phone number mathed: Go to next step");
        return true;
    }
}