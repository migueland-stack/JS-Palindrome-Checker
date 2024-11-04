const inputValue = document.getElementById("text-input");
const result = document.getElementById("result");

const check = () => {
    if (!inputValue.value) {
        alert("Please input a value");
    } else {
        const cleanedString = inputValue.value.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversedString = cleanedString.split('').reverse().join('');
        
        if (cleanedString === reversedString) {
            result.innerText = `${inputValue.value} is a palindrome!`;
        } else {
            result.innerText = `${inputValue.value} is not a palindrome!`;
        }
        
        inputValue.value = ""; // Clear the input field after checking
    }
};
