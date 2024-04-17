// TASK ONE
// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Example usage:
let year = 2024;
console.log(isLeapYear(year));

// TASK TWO
// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20
function clothingAdvice(temperature, isRaining) {
    if (temperature < 10) {
        return "It's cold. You should wear a heavy jacket, gloves, and a hat.";
    } else if (temperature >= 10 && temperature < 20) {
        if (isRaining) {
            return "It's cool and raining. You should wear a jacket and take an umbrella.";
        } else {
            return "It's cool. You should wear a light jacket or sweater.";
        }
    } else {
        if (isRaining) {
            return "It's warm and raining. You should wear a light jacket or raincoat.";
        } else {
            return "It's warm. You can wear a t-shirt and shorts.";
        }
    }
}

function main() {
    let temperature = parseFloat(prompt("Please enter the current temperature in Celsius:"));
    let isRainingInput = prompt("Is it raining? (yes/no)").toLowerCase();
    let isRaining = isRainingInput === "yes" ? true : false;

    if (!isNaN(temperature) && (isRainingInput === "yes" || isRainingInput === "no")) {
        let advice = clothingAdvice(temperature, isRaining);
        console.log(advice);
    } else {
        console.log("Invalid input. Please enter a valid temperature and specify if it's raining (yes/no).");
    }
}

main();

// RECURSION
// TASK ONE
// Power Function: Write a recursive function to calculate the result of raising a number to a given power.
function power(base, exponent) {
    // Base case: if exponent is 0, return 1
    if (exponent === 0) {
        return 1;
    }
    // Recursive case: multiply base by the result of raising base to exponent - 1
    return base * power(base, exponent - 1);
}

console.log(power(2, 3)); 
console.log(power(5, 2)); 

// TASK TWO
// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
function fibonacci(n) {
    if (n <= 0) {
        return "Input should be a positive integer";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(4));





