function isPalindrome(word) { 

  word = word.replace(/ /g,"").toLowerCase();
  let compareword = word.split("").reverse().join("");

  if (compareword === word) {
    return true;
  } 
  else {
    return false;
  } 

}
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
