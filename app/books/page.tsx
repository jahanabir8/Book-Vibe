import React from "react";
import BookCard from "../Components/Shared/BookCard";
import { BookType } from "../../app/types/BookType";
import { getAllBooks } from "@/app/lib/books";

const Books = async () => {
  const booksData = await getAllBooks();
  return (
    <section className="max-w-7xl mx-auto px-3 py-16">
      <h2 className="text-center font-bold text-[40px] mb-3">Explore All Books</h2>
      <p className="text-gray-500 text-center mb-9">
        Everything you need for your next read
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {booksData.map((book: BookType) => {
          return <BookCard key={book.id} book={book}></BookCard>;
        })}
      </div>
    </section>
  );
};

export default Books;
