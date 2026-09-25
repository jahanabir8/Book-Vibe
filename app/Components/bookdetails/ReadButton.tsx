"use client";

import { BookType } from "@/app/types/BookType";
import { useBooksContext } from "@/CreateContext/BooksProvider";
import React from "react";
import { toast } from "react-toastify";

export interface buttonPageType {
  book: BookType;
}

const ReadButton = ({ book }: buttonPageType) => {
  const { readBooks, setReadBooks } = useBooksContext();

  const handleReadBooks = () => {
    setReadBooks([...readBooks, book]);
    toast.success(`You have added - ${book.bookName} as Read Books`);
  };
  return (
    <button
      onClick={() => handleReadBooks()}
      className="px-6 py-3 rounded-md border border-gray-300 bg-white font-medium text-gray-800 hover:bg-gray-50 transition"
    >
      Read
    </button>
  );
};

export default ReadButton;
