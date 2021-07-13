let pallyChecker = (word: string): string => {
    return word.split("").reverse().join("")
} 

const myData = [
'rer',
'333',
'sos',
'yulia ailuy'
]

test("Suppose tobe a pallindrome", () => {
    myData.forEach((pals)=>{
        expect(pallyChecker(pals)).toBe(pals)
    })
})

for (let i = 0; i<myData.length; i++) {
    expect(pallyChecker(myData[i])).toBe(myData[i])
}

// test('Palindrom data Driver test'), () => {
//     expect(pallyChecker(myData[0])).toBe(myData[0])

