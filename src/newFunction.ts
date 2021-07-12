export function myFunction(myValue: number): string {
    if (myValue == 5) {
        return "true";
    } else if (myValue <5 && myValue >= 0) {
        return "false";
    } else if (myValue > 5) {
        return "big";
    } else {
        return "negative";
    }
}
console.log(myFunction(10))