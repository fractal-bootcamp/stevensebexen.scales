import type { AppState, Book } from "./types";

export function getFirstBook(state: AppState): Book | undefined {
  return state.books[0];
}

export function getLastBook(state: AppState): Book | undefined {
  return state.books[state.books.length - 1];
}

export function pushBook(state: AppState, book: Book): AppState {
  return {...state, books: [...state.books, book]};
}

export function popFirstBook(state: AppState): AppState {
  return {...state, books: state.books.slice(1)};
}

export function findBookByTitle(state: AppState, title: string): Book | undefined {
  return state.books.find(book => book.title.toLowerCase() === title.toLowerCase());
}

export function filterBooksByGenre(state: AppState, genre: string): AppState {
  return {...state, books: state.books.filter(book => book.genres.map(g => g.toLowerCase()).includes(genre.toLowerCase()))};
}

export function hasBookByAuthor(state: AppState, author: string): boolean {
  return state.books.some(book => book.author.toLowerCase() === author.toLowerCase());
}

export function getAllTitles(state: AppState): string[] {
  return state.books.map(book => book.title);
}

export function getModernBooks(state: AppState): Book[] {
  return state.books.filter(book => book.year > 1950);
}

export function getEarliestPublicationYear(state: AppState): number {
  return state.books.reduce((earliest, book) => Math.min(earliest, book.year), Infinity);
}

export function sortBooksByYear(state: AppState): AppState {
  return {...state, books: state.books.toSorted((a, b) => a.year < b.year ? -1 : a.year > b.year ? 1 : 0)};
}

export function reverseBooks(state: AppState): AppState {
  return {...state, books: state.books.toReversed()};
}

export function getAllGenres(state: AppState): string[] {
  return [...new Set(state.books.flatMap(book => book.genres))];
}

export function getAllAuthorsAndTitles(state: AppState): string[][] {
  return state.books.map(book => [book.author, book.title]);
}

export function areAllBooksFiction(state: AppState): boolean {
  return state.books.every(book => book.genres.map(genre => genre.toLowerCase()).includes('fiction'));
}

export function doAllBooksHaveTitles(state: AppState): boolean {
  return state.books.every(book => book.title && book.title.trim().length > 0);
}

export function getGenreCounts(state: AppState): Record<string, number> {
  return state.books.reduce((counts, book) => {
    book.genres.forEach(genre => {
      counts[genre] = (counts[genre] || 0) + 1;
    });
    return counts;
  }, {} as Record<string, number>);
}

export function getBookProperties(book: Book): string[] {
  return Object.keys(book);
}

export function getBookValues(book: Book): any[] {
  return Object.values(book);
}

export function getBookEntries(book: Book): [string, any][] {
  return Object.entries(book);
}

export function shallowCloneBook(book: Book): Book {
  return {...book};
}

export function cloneBook(book: Book): Book {
  return structuredClone(book);
}

export function changeYearOfBook(book: Book, newYear: number): Book {
  return {...book, year: newYear};
}

export function getBookInfo(book: Book): string {
  const {title, author, year} = book;
  return `${title} was written by ${author} in ${year}.`;
}

export function getBookInfoAndRest(book: Book): string {
  const {title, author, year, ...rest} = book;
  return `${title} was written by ${author} in ${year}. Other properties... ${Object.entries(rest).map(([k, v]) => `${k}: ${v}`).join(', ')}`;
}

export function getFirstTwoBooks(state: AppState): [Book, Book, Book[]] {
  const [first, second, ...rest] = [...state.books];
  return [first, second, rest];
}

export function getPrimaryGenre(book: Book): string | undefined {
  const [genre] = book.genres;
  return genre;
}