/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

console.log(parseInt(myVariable1) <= parseInt(myVariable2))

// вариант 1
// console.log(parseInt('+10')) 
// console.log(typeof +'10')


// вариант 2
// console.log(parseInt('25'))
// console.log(typeof parseInt('25'))

// Напишите код здесь

myVariable1 = '99'
myVariable2 = 100

console.log(parseInt(myVariable1) <= parseInt(myVariable2))
// Напишите код здесь
