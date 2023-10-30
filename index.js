class Formatter {
  //add static methods here
  // Write a method static capitalize that takes in a string and capitalizes the first letter.
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-'\s]/g, '');
  }

  // Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
// Define a static method named titleize, which takes a string as an argument
static titleize(string) {
  // Define an array of words that should remain lowercase
  const exemptedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  
  // Split the input string into an array of words
  const words = string.split(' ');

  // Map over each word in the words array and perform a specific operation
  const titleizedWords = words.map((word, index) => {
      // Check if the current word is at the 0th index or not included in the exemptedWords array
      if (index === 0 || !exemptedWords.includes(word)) {
          // If the word meets the conditions, capitalize the first letter using the capitalize function
          return this.capitalize(word);
      } else {
          // If the word is in the exemptedWords array or is not at the 0th index, leave it as is
          return word;
      }
  });
  
  // Join the modified words back into a string and return the final result
  return titleizedWords.join(' ');
}

}