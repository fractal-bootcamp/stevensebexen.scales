export type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  genres: string[];
};

export type AppState = {
  books: Book[];
};