function sumAll(arr) {
  var range=[];
  var min=Math.min(...arr); //looks for the minimum value in the array
  var max=Math.max(...arr); // looks for the maximum value in the array
  for (i=min;i<=max;i++){ //makes a range from the min to the max
    range.push(i);
  }
  return range.reduce(function(a, b) { //sums all items in the array
  return a + b;
}, 0);

}
sumAll([1, 4]);
