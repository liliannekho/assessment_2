/*Verbal Questions 
 1. What is the difference between a parameter and an argument?
    A parameter is a function delared variable an argument is a value that is passed to a function or a method when calling it. An argument is the values passed by the parameters when the function is called.

2. Within a function, what is the difference between return and console.log?
    console.log is used to log messages to the console, it does not affect the program execution
    return is used within a function to send a value back to where it was called from. The code will exit the function and return the value to the code that called the function with return.
*/

//coding challenges 

//Palindrome 

//convert the input string to lowercase to ensure the comparison is case-insensitive
function palindrome(str) {
    let lowercaseStr = str.toLowerCase()
//Split the string into an array of characters, reverse the array, and then join it back into a string.
    let reversedStr = lowercaseStr.split('').reverse().join('')
//Compare the original lowercase string with the reversed string.

    if (lowercaseStr === reversedStr) {
//If they are the same, the function should return true; otherwise, it returns false.
        return true
    } else {
        return false
    }
}

//call function
// let result = (palindrome("racecar"))
// console.log(result)

//Sum Array 
// Initialize a variable to store the sum of the array elements.
function sumArray(arr) {
    let sum = 0
// Use a for loop to iterate through the array.
    for (i = 0; i < arr.length; i++) {
// In each iteration, add the current element to the sum variable.
        sum = sum + arr[i]
    }
// After the loop, return the sum variable.
    return sum
}
