'use client'

import { BooksContext } from "@/CreateContext/BooksProvider";
import React, { useContext } from "react";

const ReadButton = ({book}) => {
    const {readBooks, setReadBooks} = useContext(BooksContext)
    const handleReadBooks = ()=>{
        // console.log('Clicked');
        setReadBooks([...readBooks, book])
    }
    console.log(readBooks);
  return (
    <button onClick={()=> handleReadBooks()} className="px-6 py-3 rounded-md border border-gray-300 bg-white font-medium text-gray-800 hover:bg-gray-50 transition">
      Read
    </button>
  );
};

export default ReadButton;
