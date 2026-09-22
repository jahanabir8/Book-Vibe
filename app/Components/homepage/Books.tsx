import React from "react";
import BookCard from "../Shared/BookCard";
import { BookType } from "../../types/BookType";
import Link from "next/link";

const getBooksData = async () => {
  const res = await fetch("http://localhost:5000/books");
  return await res.json();
};

const Books = async () => {
  const BooksData = await getBooksData();
  return (
    <section className="max-w-7xl mx-auto px-3">
      <h2 className="text-center font-bold text-[40px] mb-3">Popular Books</h2>
      <p className="text-gray-500 text-center mb-9">
        Everything you need for your next read
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* {BooksData.slice(9, 6).map((book: BookType, ind: number) => { */}
        {BooksData.slice(0, 6).map((book: BookType, ind: number) => {
          return <BookCard key={ind} book={book}></BookCard>;
        })}
      </div>
      <Link className="" href='/books'>
        <button>View More</button>
      </Link>
    </section>
  );
};

export default Books;
