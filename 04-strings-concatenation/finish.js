/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

// OPTION 1
const Name = 'Borys'

const Name2 = 'Kysl'

const Job = 'Teacher'

const info1 = 'My name ' + Name + ' ' + Name2 + ' and i work ' + Job

console.log(info1)

// OPTION 2
const info2 = `My name is ${Name} ${Name2} and i am ${Job}`

console.log(info2)