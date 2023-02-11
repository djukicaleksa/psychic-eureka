// ..Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -

// var a = 3;

// var b = 7;
// var c = 0;

// var proizvod = a * b * c;

// if (proizvod < 0) {
//   console.log('The sign is -');
// } else {
//   console.log('The sign is +');
// }

// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
// console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

// var vratiNajveciBroj;

// vratiNajveciBroj = function (a, b, c, d, e) {
//   if (a > b && a > c && a > d && a > e) {
//     {
//       console.log('Najveci broj je:', a);
//     }
//     if (b > a && b > c && b > d && b > e) {
//       console.log('Najveci broj je:', b);
//     }
//     if (c > b && c > a && c > d && c > e) {
//       console.log('Najveci broj je:', c);
//     }
//     if (d > b && d > c && d > a && d > e) {
//       console.log('Najveci broj je:', d);
//     }
//     if (e > b && e > c && e > d && e > a) {
//       console.log('Najveci broj je:', e);
//     }
//   }
// };

// vratiNajveciBroj(15, 123, 97, -3, 5);

// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// var sortirajBrojeve = function (a, b, c) {
//   if (a > b && b > c) {
//     console.log(a, b, c);
//   } else if (b > a && a > c) {
//     console.log(b, a, c);
//   } else if (c > b && b > a) {
//     console.log(c, b, a);
//   } else if (c > a && a > b) {
//     console.log(c, a, b);
//   } else if (b > c && c > a) {
//     console.log(b, c, a);
//   } else if (a > c && c > b) {
//     console.log(a, c, b);
//   }
// };

// sortirajBrojeve(2, 7, 45);

// Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
// divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10 Sample input: 7
// Output: 10 / 2 = 5 Output: X

// var deljivSaDva = function (deljenik) {
//   var moduo = deljenik % 2;
//   if (moduo === 0) {
//     console.log('Deljivo');
//     console.log('Brojevi sa nula su');
//   } else {
//     console.log('Nije deljivo, moduo je ' + moduo);
//   }
// };

// deljivSaDva(10);

// Task 5. Write a program that compares two numbers and displays the larger. Display the result in
// the console.

// console.log();

// var porediDvaBroja = function (prviBroj, drugiBroj) {
//   if (prviBroj > drugiBroj) {
//     console.log(prviBroj);
//   } else if (drugiBroj > prviBroj) {
//     console.log(drugiBroj);
//   } else if (prviBroj === drugiBroj) {
//     console.log('Isti su jebem li ga');
//   }
// };

// porediDvaBroja(35, 35);

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F

var konvertujCLSuFRH = function ( kurcina ) {
   var Fahrenheit = (9*kurcina/5) + 32;
   console.log(kurcina +"°C is"+Fahrenheit+"°F") ;
  } 
  konvertujCLSuFRH(77)

// Task 7. Write a JavaScript program to get the difference between a given number and 13, if
// the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11 Sample Input: 32
// Output : 2 . Output : 38


// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17 Output : 48
// Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

// Output : - Output : true Output : true

// Task 10. Write a JavaScript program to check a given integer is within 20 to100 or 100 to
// 400, and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400
