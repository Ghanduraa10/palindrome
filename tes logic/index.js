function isPalindrome(word) {
  let cleanWord = word.toLowerCase();
  let reversedWord = "";
  for (let i = cleanWord.length - 1; i >= 0; i--) {
    reversedWord += cleanWord[i];
  }
  return cleanWord === reversedWord;
};

let word = "Main"
if (isPalindrome(word)) {
  console.log(`"${word}" adalah palindrome `);
} 
else {
  console.log(`"${word}" bukan palindrome `);
};