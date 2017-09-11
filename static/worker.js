onmessage = function(e) {
  var numbers = e.data;
  var numArray = [];
  var primeArray = [];
  var start = numbers[0];
  var end = numbers[1];

  for (var i = 0; i < end; i++) {
    var divisArray = [];
    numArray.push(i);
    [].forEach.call(numArray, function (num) {
      if (i % num === 0) {
        divisArray.push(num)
      }
    });
    if (i >= start && divisArray.length <= 2) {
      primeArray.push(i);
      postMessage(i);
    }
  }
}
