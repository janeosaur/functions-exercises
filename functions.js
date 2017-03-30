// TODO: add your solutions here!

// #1
function combineWords(a, b) {
  console.log("The answer to #1 is", a+b)
}
combineWords('dog', 'house');

// #2 -
function repeatPhrase(n, phrase) {
  var result = '';
  for (i = 0; i < n; i++) {
    result += phrase

  }
  console.log("The answer to #2 is", result);
}
repeatPhrase(5, 'hello');

// #3 -
function numberPower(x, n) {
  var result = x;
  for (i = 1; i < n; i++) {
    result *= x
  }
  console.log("The answer to #3 is", result);
}
numberPower(2,5);

// #4
function circleArea(radius) {
  console.log("The answer to #4 is", Math.PI * radius * radius)
}
circleArea(5);

// #5
function findPyth(a, b) {
  console.log("The answer to #5 is", Math.sqrt(a*a + b*b))
}
findPyth(2,4);

// #6
function evenDivisible(x,y) {
  if (x%y === 0) {
    console.log("The answer to #6 is", true)
  } else {
    console.log("The answer to #6 is", false)
  }
}
evenDivisible(6,2);

// #7 -
function vowelCount(word) {
  var count = 0;
  var toLow = word.toLowerCase();
  for (i = 1; i <= word.length; i++ ) {
    if (toLow[i] == 'a' || toLow[i] == 'e' || toLow[i] == 'i' || toLow[i] == 'o' || toLow[i] == 'u' || toLow[i] == 'y') {
      count++;
    }
  }
  console.log("The answer to #7 is", count)
}
vowelCount("vowelVOWELOOOO");

// #8 -
function findWdi(x) {
  for (var i = 0; i < x.length; i++) {
    if(x[i] === 'wdi') {
      console.log("The answer to #8 is", true)
    } else {
      console.log("The answer to #8 is", false)
    }
  }
}

findWdi(['dog', 'girl', 'wdi']);

// #9 -
function longestWord(sentence) {
  var longestWord = 0;
  var sentenceArray = sentence.split(' ')
  for (i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length > longestWord) {
      longestWord = sentenceArray[i].length;
      result = sentenceArray[i]
    }
  } console.log("The answer to #9 is", result, "and there are", longestWord, "letters")
}
longestWord("The fox howled over the moon");

// #10
function printTriangle(x) {
  for (i = 0; i <= x; i++) {
    var tier = '';
    for (var j = 0; j< i; j++) {
      tier += '* ';
  }
  console.log(tier)
}
}
printTriangle(5);

// #11 see supersimple.html and supersimple.js

// #12

function printPyramid(x) {
/* x = 10
first: 0: prints nothing, but is centered... 10 spaces (x)
second: 1: prints one (1) star, centered... 9 spaces (x-1)
third: 2: prints two(2) star, 8 spaces from left (x-2)
*/
for(var i = 1; i <= x; i++) {
		var tier = '';
    var spaces = '';

		for(var j = x - i; j > 0; j--) {
			spaces += ' ';
		}
		for(var m = 0; m < i; m++) {
			tier += '* ';
		}
		console.log(spaces,tier);
	}
}
printPyramid(10);
