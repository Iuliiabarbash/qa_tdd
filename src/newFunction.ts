export function myFunction(myValue: number): string {
    if (myValue == 5)
        return "true";
    else if (myValue <5 && myValue >= 0)
        return "false";
    else if (myValue > 5)
        return "big";
    else
        return "negative";
    
}
console.log(myFunction(100))

//anither practice 

export function anotherFunction(number: number): string {
    if (number == 5) return "true";
    if (number < 5 && number >= 0) return "false";
    if (number > 5) return "big";
    else return "negative"
}

console.log(anotherFunction(51))

// let aNumber = 5;

// function thirdFunction() {
//     switch () {
//         case `${aNumber} = 5`:
//             console.log("true");
//             break
//         case `${aNumber} < 5 && ${aNumber} >= 0`:
//             console.log("false");
//             break
//         case `${aNumber} > 5`:
//             console.log('big');
//             break
//         default:
//             console.log('negative');
//     }
// }

// console.log(thirdFunction(aNumber));

