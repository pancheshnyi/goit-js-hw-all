/**
 * Задача 1. Генератор slug
 *
 * Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!
 * Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення
 * читабельних URL-адрес.
 *
 * Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug
 * із назви статті. У результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-beginners.
 *
 * Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
 *
 * Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
 *
 * Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
 * Усі символи slug повинні бути в нижньому регістрі.
 * Усі слова slug повинні бути розділені тире.
 */

function slugify(title) {
  let titleLower = title.toLowerCase();

  return titleLower.split(' ').join('-');
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
