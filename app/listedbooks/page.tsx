"use client";

import { BooksContext } from "@/CreateContext/BooksProvider";
import React, { useContext, useState } from "react";
// import BookCard from "../Components/Shared/BookCard";
import { BookType } from "../types/BookType";
import ListedBookCard from "../Components/Shared/ListedBookCard";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  const [ sortBy, setSortBy ] = useState<"rating" | "pages" | "year">("rating");

//   console.log(readBooks, wishList, "readBooks", "wishList");

    console.log(sortBy, 'sortby');
  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="my-4 text-center bg-amber-200 rounded-3xl py-16 font-bold">
        Listed books
      </h2>

      {/* sort */}
      <div className="text-center">
        <select 
        value={sortBy}
        onChange={(e)=> setSortBy(e.target.value as 'rating' | 'pages' | 'year')}
        defaultValue="Sort By" 
        className="select select-accent">
          <option disabled={true}>Sort By</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of Pages</option>
          <option value={"year"}>Publisher Year</option>
        </select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 gap-2">
          {readBooks.length > 0 ? (
            readBooks.map((book: BookType, index: number) => (
              <ListedBookCard key={index} book={book} />
            ))
          ) : (
            <p>No Books Found</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`WishList Books (${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 gap-2">
          {wishList.length > 0 ? (
            wishList.map((book: BookType, index: number) => (
              <ListedBookCard key={index} book={book} />
            ))
          ) : (
            <p>No Books Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
