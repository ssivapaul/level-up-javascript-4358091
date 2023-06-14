// Write your code here
function permutation(letters) {
  let n = letters.length;
  if(n === 1) {
    return 1;
  }
  letters = letters.slice(1);
  return n*permutation(letters);
}
console.log(permutation("hel"));