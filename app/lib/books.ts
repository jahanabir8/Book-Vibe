import fs from "fs/promises";
import path from "path";
import { BookType } from "@/app/types/BookType";

interface BooksFile {
  books: BookType[];
}

async function readBooksFile(): Promise<BookType[]> {
  const filePath = path.join(process.cwd(), "public", "booksData.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  const data: BooksFile = JSON.parse(fileContents);
  return data.books;
}

export async function getAllBooks(): Promise<BookType[]> {
  return readBooksFile();
}

export async function getBookById(id: string): Promise<BookType | undefined> {
  const books = await readBooksFile();
  return books.find((book) => String(book.id) === id);
}
