function numberGenerator(params) {
    arr = phoneNumbers = [];
    while (phoneNumbers.length < count) {
        var phoneNum = '+998' +
            (Math.floor(Math.random() * 90 + 10)).toString().padStart(2, '0') + ' ' +
            (Math.floor(Math.random() * 900 + 100)).toString().padStart(3, '0') + ' ' +
            (Math.floor(Math.random() * 90 + 10)).toString().padStart(2, '0') + ' ' +
            (Math.floor(Math.random() * 90 + 10)).toString().padStart(2, '0');
        
    }
}