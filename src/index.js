module.exports = function toReadable (number) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var arr = number.toString().split('');
    if (number === 0) return 'zero';
    else if (arr.length === 1){
        return ones[+arr[0]];
    }
    else if (arr.length === 2 && +arr[0] === 1) {
        return teens[+arr[1]];
    }
    else if (arr.length === 2 && number % 10 === 0){
        return tens[+arr[0]];
    }
    else if (arr.length === 2 && +arr[0] > 1 && number % 10 !== 0) {
        return tens[+arr[0]] + ' ' + ones[+arr[1]];
    }
    else if (arr.length === 3 && number % 100 === 0){
        return ones[+arr[0]] + ' hundred';
    }
    else if (arr.length === 3 && +arr[1] === 1 && +arr[2] === 0){
        return ones[+arr[0]] + ' hundred ' + 'ten';
    }
    else if (arr.length === 3 && number % 10 === 0 && number % 100 !== 0) {
        return ones[+arr[0]] + ' hundred ' + tens[+arr[1]];
    }
    else if (arr.length === 3 && +arr[1] === 0){
        return ones[+arr[0]] + ' hundred ' + ones[+arr[2]];
    }
    else if (arr.length === 3 && +arr[1] === 1){
        return ones[+arr[0]] + ' hundred ' + teens[+arr[2]];
    }
    else return ones[+arr[0]] + ' hundred ' + tens[+arr[1]] + ' ' + ones[+arr[2]];
}   

