/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.
If there are no vowels at all, return an empty string "".
Your function should also accept a `counter` parameter that will be an empty
object by default.
Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.
Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)
// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)
// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)
// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)
// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)
// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)
// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)
// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)
// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'
Run tests on just this file by typing `npm test test/03-most-frequent-vowel-spec.js`
on the command line.
***********************************************************************/
const vowels = ["a", "e", "i", "o", "u"];
const mostFrequentVowel = (words, counter = {}) => {
    // Base case
    if (words.length === 0) {
        // Define a variable to track highest occurring vowel
        let highestOccurringVowel = -Infinity;
        // Define a variable to track current most vowel
        let currentMostVowel = "";

        // Iterate through counter object
        for (let key in counter) {
            // Check if the value at the key in the counter object is bigger or smaller than the current highest
            if (counter[key] > highestOccurringVowel) {
                // Highest becomes the value at the key
                highestOccurringVowel = counter[key];
                // Current most vowel becomes the key
                currentMostVowel = key;
            }
        }
        // Return the currentMostVowel
        return currentMostVowel;
    }

    // Get the first word of the words array
    for (let i = 0; i < words[0].length; i++) {
        // Variable to hold the letter
        let letter = words[0][i];

        // Check if the letter is a vowel
        if (vowels.includes(letter)) {
            // Check if letter exists in the counter default param object
            if (counter[letter] === undefined) {
                // Creat it, a letter as key and value as number of occurrences
                counter[letter] = 1;
            } else {
                // Add 1 to the key if letter already exists in counter
                counter[letter] += 1;
            }
        }
    }

    // Recursive case
    return mostFrequentVowel(words.slice(1), counter);
};

// Other solution

// let mostFrequentVowel = function (words, counter = {}) {
//   if (words.length === 0) {
//     let highest = -Infinity;

//     let currentMost = "";

//     for (let key in counter) {
//       if (counter[key] > highest) {
//         highest = counter[key];
//         currentMost = key;
//       }
//     }
//     return currentMost;
//   }

//   for (let i = 0; i < words[0].length; i++) {
//     let letter = words[0][i];
//     if (VOWELS.includes(letter)) {
//       if (counter[letter] === undefined) {
//         counter[letter] = 1;
//       } else {
//         counter[letter] += 1;
//       }
//     }
//   }

//   return mostFrequentVowel(words.slice(1), counter);
// };

// Other solution using helper functions and refactoring

// let populateCounterObject = (words, counter) => {
//   words.forEach((letter) => {
//     if (VOWELS.includes(letter)) {
//       if (counter[letter] === undefined) counter[letter] = 1;
//       else counter[letter] += 1;
//     }
//   });

//   return counter;
// };

// let findCurrentMostVowel = (counter) => {

//   let highest = -Infinity;
//   let currentMost = "";

//   for (let key in counter) {
//     if (counter[key] > highest) {
//       highest = counter[key];
//       currentMost = key;
//     }
//   }

//   return currentMost;
// };

// let mostFrequentVowel = (words, counter = {}) => {
//   if (words.length === 0) {
//     let mostFrequentVowelResult = findCurrentMostVowel(counter);
//     return mostFrequentVowelResult;
//   }

//   let newCounterObj = populateCounterObject(words[0], counter);

//   return mostFrequentVowel(words.slice(1), newCounterObj);
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = mostFrequentVowel;
} catch {
    module.exports = null;
}
