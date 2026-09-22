
'use client'
import { BooksContext } from "@/CreateContext/BooksProvider";
import React, { useContext } from "react";
import { buttonPageType } from "./ReadButton";
import { toast } from "react-toastify";

const WishListButton = ({book}: buttonPageType) => {
    const {wishList, setWishList} = useContext(BooksContext)
    const handleWishList = ()=>{
        setWishList([...wishList, book])
        toast.success(`You have added - ${book.bookName} in wishlist`)
    }
    console.log('Wishlist is:', wishList);
  return (
    <button onClick={()=>handleWishList()} className="px-6 py-3 rounded-md bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition">
      Wishlist
    </button>
  );
};

export default WishListButton;
