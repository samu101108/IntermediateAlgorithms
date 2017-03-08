//SOME PRIMES
//2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349
var primes = [];
var range = [];
function sumPrimes(num) {
  range = makeRange(num);
  for (i = 0; i < range.length; i++){
    if (isPrime(i))
      primes.push(i);
  }
  return primes.reduce(function(a, b) { //sums all items in the array
  return a + b;
}, 0);
  
}

function makeRange(r) {
 for(var i = 0; i < r; i++) {
   range.push(i);
 }
   return range;
}

function isPrime(p){
  if (p <= 1 )
    return null;
  if (p == 2 || p == 3 || p == 5 || p == 7)
     primes.push(p);
  else if (p % 2 === 0 || p % 3 === 0 || p % 5 === 0 || p % 7 === 0)
    return null;
  else
    primes.push(p);
}

sumPrimes(977);
