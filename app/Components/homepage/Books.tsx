import React from "react";
import BookCard from "../Shared/BookCard";
import { BookType } from "../../types/BookType";
import Link from "next/link";
import { getAllBooks } from "@/app/lib/books";

const Books = async () => {
  const booksData = await getAllBooks();
  return (
    <section className="max-w-7xl mx-auto px-3">
      <h2 className="text-center font-bold text-[40px] mb-3">Popular Books</h2>
      <p className="text-gray-500 text-center mb-9">
        Everything you need for your next read
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {booksData.slice(0, 6).map((book: BookType) => {
          return <BookCard key={book.id} book={book}></BookCard>;
        })}
      </div>
      <div className="text-center mt-9">
        <Link href="/books">
          <button className="btn">View More</button>
        </Link>
      </div>
    </section>
  );
};

export default Books;
