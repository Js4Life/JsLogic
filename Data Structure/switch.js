// putstr('Enter a month number:');
// var monthNum = readline();
// var monthName;
// var monthNum = 1;

// var a = prompt('Hi');
// console.log(a);
const readline = require('readline')
var monthNum = readline();
var monthName;

switch(monthNum) {
    case "1":
    monthName = "Jan";
    break;

    case "2":
    monthName ="Feb"
    break;

    case "3":
    monthName = "Mar"
    break;

    case "4":
    monthName ="Apr"
    break;

    case "5":
    monthName ="May"
    break;

    case "6":
    monthName="June"
    break;

    case "7":
    monthName ="July"
    break;

    case "8":
    monthName = "Aug"
    break;

    case "9":
    monthName="Sept"
    break;

    case "10":
    monthName="Oct"
    break;

    case "11":
    monthName="Nov"
    break;

    case "12":
    monthName="Dec"
    break;
    default:
    console.log("bad input")

}