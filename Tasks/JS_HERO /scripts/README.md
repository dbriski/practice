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