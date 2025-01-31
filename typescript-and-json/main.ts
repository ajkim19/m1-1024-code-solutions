const books: object[] = [
  {
    isbn: '978-0141439600',
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
  },
  {
    isbn: '978-1607963028',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
  },
  {
    isbn: '9780061122415',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
];

console.log('books:', books);
console.log('typeof books:', typeof books);

const booksStringify = JSON.stringify(books);

console.log('booksStringify:', booksStringify);
console.log('typeof booksStringify:', typeof booksStringify);

const studentJSON = '{"id": 1234, "name": "Aaron Kim"}';

console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

const studentParse = JSON.parse(studentJSON);

console.log('studentParse:', studentParse);
console.log('typeof studentParse:', typeof studentParse);

/// /
