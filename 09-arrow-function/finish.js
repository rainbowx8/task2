/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 * 4. Вызовите функцию и выведите результат в консоль
 *
 * 5. Перепишите функцию так, чтобы результат возвращался неявно
 */

 const helloWorld = () => 'Привет, мир!'//без return тоже работает(неявный возврат функции)
 // но если выражений больше одного то надо реторн

console.log(helloWorld())



// const helloWorld = () => {
//     return 'Привет, мир!'
// }
 
// console.log(helloWorld())