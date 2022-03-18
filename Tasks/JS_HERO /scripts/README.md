## JS Hero exercies

### String: length
Write a function length that takes a string and 
returns the number of characters of the string.
Example: length('sun') should return 3.

### String: toUpperCase()
Write a function toCase that takes a string and 
returns that string in lowercase and uppercase with - as delimiter.
Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.

### String: charAt()
Write a function shortcut that takes two strings 
and returns the initial letters of theses strings.
Example: shortcut('Amnesty', 'International') should return 'AI'.

### String: trim()
Write a function firstChar, which returns the first character 
that is not a space when a string is passed.
Example: firstChar(' Rosa Parks ') should return 'R'.

### String: indexOf()
Write a function indexOfIgnoreCase taking two strings and determining 
the first occurrence of the second string in the first string. 
The function should be case insensitive.
Example: indexOfIgnoreCase('bit','it') and 
indexOfIgnoreCase('bit','IT') should return 1.

### String: indexOf() with from index
Write a function secondIndexOf, taking two strings and determining 
the second occurrence of the second string in the first string. 
If the search string does not occur twice, -1 should be returned.
Example: secondIndexOf('White Rabbit', 'it') should return 10.

### String: substr()
Write a function firstWord, taking a string and 
returning the first word in that string. 
The first word are all characters up to the first space.
Example: firstWord('see and stop') should return 'see'.

### String: replace()
Write a function normalize, that replaces '-' with '/' in a date string.
Note: chaining.
Example: normalize('20-05-2017') should return '20/05/2017'.

### Numbers
Write a function add that takes two numbers and returns their sum.
Example: add(1, 2) should return 3.

### Fahrenheit
Write a function toFahrenheit that converts 
a temperature from Celsius to Fahrenheit.
Example: toFahrenheit(0) should return 32.

### Modulo
Write a function onesDigit that takes a natural number 
and returns the ones digit of that number.
Example: onesDigit(2674) should return 4.

### Parentheses
Write a function mean that takes 2 numbers and returns their mean value.
Example: mean(1, 2) should return 1.5.

### Math
Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. 
The length of the two legs is passed to the function. 
Tip: In a right triangle the Pythagorean theorem is valid. 
If a and b are the lengths of the two legs and c is the length of the hypotenuse, 
the following is true: a² + b² = c². 
Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.

### min and max
Write a function midrange, that calculates the midrange of 3 numbers. 
The midrange is the mean of the smallest and largest number.
Example: midrange(3, 9, 1) should return (9+1)/2 = 5.

### Math.PI
Write a function area that calculates the area of a circle. 
The function is given the radius of the circle.
Example: area(1) should return π and area(2) should return 4 * π.

### Rounding
Write a function round100 that rounds a number to the nearest hundred.
Example: round100(1749) should return 1700 and round100(856.12) should return 900.

### Random numbers
Write a function dice that returns like a dice a random number between 1 and 6.

### parseInt
Write a function add that takes a string with a summation task and returns its result as a number. 
Two natural numbers should be added. The summation task is a string of the form '102+17'.
Example: add('102+17') should return 119.

### Boolean
Write a function nand that takes two Boolean values. If both values are true, the result should be false. 
In the other cases the return should be true.
I.e.: The call nand(true, true) should return false. The calls nand(true, false), 
nand(false, true) and nand(false, false) should return true.

### NOR
Write a function nor that takes two Boolean values. 
If both values are false, the result should be true. 
In the other cases the return should be false.
I.e.: The call nor(false, false) should return true. 
The calls nor(true, false), nor(false, true) and nor(true, true) should return false.

### XOR
Write a function xor that takes two Boolean values. If both values are different, the result should be true. 
If both values are the same, the result should be false.
I.e.: The calls xor(true, false) and xor(false, true) should return true. 
The calls xor(true, true) and xor(false, false) should return false.

### Strict equality
Write a function equals that checks two values for strict equality.
Example: equals(1, 1) should return true and equals(1, 2) should return false.

### Three identical values
Write a function equals that checks 3 values for strict equality. 
The function should only return true if all 3 values are equal.
Example: equals(1, 1, 1) should return true and equals(1, 2, 1) should return false.

### Even numbers
Write a function isEven that checks if a passed number is even. 
If the given number is even, true should be returned, otherwise false.
Example: isEven(2) should return true and isEven(3) should return false.

### Strict inequality
Write a function unequal that checks 3 values for strict inequality. 
The function should return true if all three parameters are strict unequal. Otherwise false.
Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.

### Compare numbers
Write a function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.
Example: isThreeDigit(500) should return true and isThreeDigit(50) should return false.

### if
Write a function equals that checks two values for strict equality. 
If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.
Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.

### Two returns
Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. 
If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.
Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.

### if...else
Write a function addWithSurcharge that adds two amounts with surcharge. 
For each amount less than or equal to 10, the surcharge is 1. 
For each amount greater than 10, the surcharge is 2.
Example: addWithSurcharge(5, 15) should return 23.

### else if
Write a function addWithSurcharge that adds two amounts with surcharge. 
For each amount less than or equal to 10, the surcharge is 1. 
For each amount greater than 10 and less than or equal to 20, the surcharge is 2. 
For each amount greater than 20, the surcharge is 3.
Example: addWithSurcharge(10, 30) should return 44

### Arrays
Write a function toArray that takes 2 values and returns these values in an array.
Example: toArray(5, 9) should return the array [5, 9].

### Get array elements
Write a function getFirstElement that takes an array and returns the first element of the array.
Example: getFirstElement([1, 2]) should return 1.

### Set array elements
Write a function setFirstElement that takes an array and an arbitrary variable. 
The variable should be inserted as the first element in the array. 
The array should be returned.
Example: setFirstElement([1, 2], 3) should return [3, 2].

### Array: length
Write a function getLastElement that takes an array and returns the last element of the array.
Example: getLastElement([1, 2]) should return 2.

### Sorting arrays
Write a function sort that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array.
Example: sort([2, 3, 1]) should return [1, 2, 3].

### Array: shift() and push()
Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. 
The 0th element should be placed at the end of the array. The rotated array should be returned.
Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].

### Array:index()
Write a function add that adds an element to the end of an array. 
However, the element should only be added if it is not already in the array.
Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].

### Array: concat()
Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. 
If both arrays are equally long, the second array should be appended to the first array.
Example: concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8].

### Array: slice()
Write a function halve that copies the first half of an array. 
With an odd number of array elements, the middle element should belong to the first half.
Example: halve([1, 2, 3, 4]) should return [1, 2].

### Array: join()
Write a function list that takes an array of words and returns a string by concatenating the words in the array, 
separated by commas and - the last word - by an 'and'. An empty array should return an empty string.
Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'.

### Array of Arrays
Write a function flat that flattens a two-dimensional array with 3 entries.
Example: flat(loshu) should return [4, 9, 2, 3, 5, 7, 8, 1, 6]. Thereby loshu is the magic square from the example above.

### Comments
Write a function median that takes an array of ascending numbers and returns the median of that numbers.
Example: median([1, 2, 10]) should return 2 and median([1, 2, 10, 100]) should return 6.

### undefined
Write a function hello having one parameter and returning 'Hello <parameter>!'. 
If hello is called without an argument, 'Hello world!' should be returned.
Example: hello('Nala') should return 'Hello Nala!'.

### null
Write a function cutComment that takes one line of JavaScript and returns a possible line comment trimmed. 
If the line contains no line comment, null should be returned. 
For simplicity, we assume that the code does not contain the comment characters within a string.
Example: cutCommt('let foo; // bar') should return 'bar'.

### null
Write a function cutComment that takes one line of JavaScript and returns a possible line comment trimmed. 
If the line contains no line comment, null should be returned. For simplicity,
we assume that the code does not contain the comment characters within a string.
Example: cutCommt('let foo; // bar') should return 'bar'.

### for loop
Write a function addTo that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. 
The result is to be returned.
Example: addTo(3) should return 1+2+3 = 6.

### Factorial
Write a function factorial that calculates the factorial of a positive integer.
Example: factorial(3) should return 6.
