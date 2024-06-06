// Convert a x="hello", x=121 & x="1234567098765432221" to palindrom number

const palidrome = (num) => {
    return num === num.toString().split("").reverse().join("")

    return num
}

console.log("Hello==>", palidrome("num"));
console.log("Hello==>", palidrome("goodness"));
console.log("Hello==>", palidrome("anna"));