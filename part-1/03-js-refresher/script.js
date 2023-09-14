const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
const books = getBooks();

/* fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data));

  */

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
};
getData();

/*

// Functional Array Methods

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => el * 5);
x;

const bookTitles = books.map((book) => book.title);
bookTitles;

const booksData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: book.reviewsCount,
}));
booksData;

const longBooks = books
  .filter((book) => book.pages > 500)
  .map((book) => book.title);
longBooks;

// Reduce Methods

const pagesAllBook = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBook);

//

const xy = [3, 7, 1, 9, 3, 8, 0];
//  sort mutates the original Array
console.log(xy.slice().sort((a, b) => a - b));
console.log(xy);

//

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(
  sortedByPages.map((book) => ({ pages: book.pages, title: book.title }))
);
//

const newBook = {
  id: 6,
  title: "Harry potter and the chamber of secrets",
  author: "J.K. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

//
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

//

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 2 ? { ...book, author: "Saurav Kumar Verma" } : book
);
console.log(booksAfterUpdate);

*/
/*********************** 
// Destructuring

//   // With Objects

const book = getBook(1);
const book2 = getBook(3);
console.log(book);

const { title, author, pages, hasMovieAdaptation, genres, publicationDate } =
  book;

console.log(genres);

//   // With Arrays

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...rest] = genres;

console.log(primaryGenre, secondaryGenre);
// Rest / Spread Operators

console.log(rest);

const newGenres = [...genres, "hindi comedy", "epic fantasy"];
console.log(newGenres);

const updatedBook = { ...book, movieReleaseDate: "2001-12-19", pages: 980 };
console.log(updatedBook);

// Template Literals

// Ternary Operators

const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";

const summary = `${title} is a ${pages} long book written by ${author} was published in ${
  publicationDate.split("-")[0]
} was a huge hit and later a movie was made on the book. the pages range is ${pagesRange}. The book has${
  hasMovieAdaptation ? "" : "not"
} a Movies Adaptation.`;

summary;

// Arrow Functions

// function getYear(str) {
//   return str.split("-")[0]
// }

const getYear = (str) => str.split("-")[0];

console.log(getYear("2123-23-12"));

// Short Circuiting and Logical Operators

console.log(true && "whatever it is");

console.log(false && "whatever it is");

// And Operator will return first false value or the last truthy value

console.log(0 && "some smith");

console.log(book.translations.spanish || "don't have spanish");

console.log(book.reviews.librarything.reviewsCount);
console.log(undefined ?? "no data");

function getTotalReviewCount(book) {
  const goodRead = book.reviews.goodreads?.reviewsCount ?? 0;
  const libraryAnything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodRead + libraryAnything;
}

console.log(getTotalReviewCount(book));
console.log(getTotalReviewCount(book2));

*/
