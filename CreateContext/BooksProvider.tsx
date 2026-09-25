'use client'
import { BookType } from '@/app/types/BookType';
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

export interface BooksContextType {
  readBooks: BookType[];
  setReadBooks: Dispatch<SetStateAction<BookType[]>>;
  wishList: BookType[];
  setWishList: Dispatch<SetStateAction<BookType[]>>;
}
export const BooksContext = createContext<BooksContextType | undefined>(undefined);

const BooksProvider = ({ children }: { children: React.ReactNode }) => {

  const [readBooks, setReadBooks] = useState<BookType[]>([]);
  const [wishList, setWishList] = useState<BookType[]>([]);

  const sharedData = { readBooks, setReadBooks, wishList, setWishList };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

// Shared hook: guarantees `useBooksContext()` never returns undefined,
// so consuming components don't each need their own null-check.
export const useBooksContext = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error('useBooksContext must be used within a BooksProvider');
  }
  return context;
};

export default BooksProvider;
