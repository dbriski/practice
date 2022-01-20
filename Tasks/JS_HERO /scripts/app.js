// String: length
function length(name) {
  return name.length;
 }
 length('bla');

 //String: toUpperCase()
 function toCase(input) {
  return input.toLowerCase() + '-' + input.toUpperCase();
 }
 toCase('bla');

// String: charAt()
function shortcut(name1, name2) {
  let char1 = name1.charAt(0);
  let char2 = name2.charAt(0);
  return char1 + char2;
 }
 shortcut('Lala', 'Land');

//String: trim()
function firstChar(name) {
  let trim = name.trim();
  return trim.charAt(0);
 }
 firstChar(' Lisa Lisa ');

// String: indexOf()
function indexOfIgnoreCase(name1, name2) {
  let lowChar1 = name1.toLowerCase();
  let lowChar2 = name2.toLowerCase();
  return lowChar1.indexOf(lowChar2);
 }
 indexOfIgnoreCase('bit', 'IT');

// String: indexOf() with from index
function secondIndexOf(name1, name2){
  let n1 = name1.indexOf(name2);
  return name1.indexOf(name2, n1 + 1);
}
secondIndexOf('White Rabbit', 'it');

// String: substr()
function firstWord(name) {
  let firstBlank = name.indexOf(' ');
  return name.substr(0, firstBlank);
 }
 firstWord('Dani je cool');

//String: replace() - NOTE: chaining!
function normalize(date) {
  return date.replace('-', '/').replace('-', '/');
 }
 normalize('19-01-2021');