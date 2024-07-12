import fs from 'fs';
import type { AppState, Book } from './types';
import { getFirstBook, getLastBook, pushBook, popFirstBook, findBookByTitle, filterBooksByGenre, hasBookByAuthor, getAllTitles, getModernBooks, getEarliestPublicationYear, sortBooksByYear, reverseBooks, getAllGenres, getAllAuthorsAndTitles, areAllBooksFiction, doAllBooksHaveTitles, getGenreCounts, getBookProperties, getBookValues, getBookEntries, cloneBook, changeYearOfBook, getFirstTwoBooks, getBookInfo, getBookInfoAndRest, getPrimaryGenre } from './functions';

const initialState: AppState = {
  books: [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genres: ["Fiction", "Drama"] },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, genres: ["Fiction", "Dystopian"] },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genres: ["Fiction", "Romance"] },
    { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genres: ["Fiction", "Fantasy"] },
    { id: 5, title: "To the Lighthouse", author: "Virginia Woolf", year: 1927, genres: ["Fiction", "Modernist"] },
  ]
};

const outFile = fs.openSync('out.txt', 'w');
function writeBlock(header: string, data?: any): void {
  if (typeof data === 'object') {
    fs.writeSync(outFile, `${header}\n${JSON.stringify(data, undefined, 2)}\n\n`);
  } else if(data === undefined) {
    fs.writeSync(outFile, `${header}\n\n`);
  } else {
    fs.writeSync(outFile, `${header}\n${data}\n\n`);
  }
}

function main(state: AppState) {
  
  // Basic array ops
  writeBlock('--- Basic Array Operations ---', undefined);
  writeBlock('First book:', getFirstBook(state));
  writeBlock('Last book:', getLastBook(state));
  const newBook: Book = { id: 6, title: "Dune", author: "Frank Herbert", year: 1965, genres: ["Science Fiction"] };
  writeBlock('Books after adding:', pushBook(state, newBook));
  writeBlock('Books without first:', popFirstBook(state));
  writeBlock('Found book with title 1984:', findBookByTitle(state, "1984"));
  writeBlock('Fiction books:', filterBooksByGenre(state, "Fiction"));
  writeBlock('Has Jane Austen book?:', hasBookByAuthor(state, "Jane Austen"));
  // Transformations
  writeBlock('--- Array Transformations ---', undefined);
  writeBlock('All titles:', getAllTitles(state));
  writeBlock('Modern books:', getModernBooks(state));
  fs.writeSync(outFile, `Earliest publication year:\n${getEarliestPublicationYear(state)}\n\n`);
  writeBlock('Books sorted by year:', sortBooksByYear(state));
  writeBlock('Reversed books:', reverseBooks(state));
  // Advanced array ops
  writeBlock('--- Advanced Array Operations ---', undefined);
  writeBlock('All genres (flattened):', getAllGenres(state));
  writeBlock('Authors and their books:', getAllAuthorsAndTitles(state));
  writeBlock('All books are fiction:', areAllBooksFiction(state));
  writeBlock('All books have titles:', doAllBooksHaveTitles(state));
  writeBlock('Genre counts:', getGenreCounts(state));
  // Object ops
  writeBlock('--- Object Operations ---', undefined);
  const book = state.books[0];
  writeBlock('Book:', book);
  writeBlock('Book properties:', getBookProperties(book));
  writeBlock('Book values:', getBookValues(book));
  writeBlock('Book entries:', getBookEntries(book));
  writeBlock('Cloned book:', cloneBook(book));
  const modifiedBook = changeYearOfBook(book, 1984);
  writeBlock('Book with changed year:', newBook);
  // Destructuring
  writeBlock('--- Destructuring ---', undefined);
  writeBlock('Book info:', getBookInfo(state.books[0]));
  writeBlock('Book info and rest:', getBookInfoAndRest(state.books[0]));
  const [first, second, rest] = getFirstTwoBooks(state);
  writeBlock('First book:', first);
  writeBlock('Second book:', second);
  writeBlock('Rest of the books:', rest);
  writeBlock('Primary genre of the first book:', getPrimaryGenre(state.books[0]));
}

main(initialState);