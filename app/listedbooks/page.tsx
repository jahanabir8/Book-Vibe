'use client'

import { BooksContext } from '@/CreateContext/BooksProvider';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const {readBooks, wishList} = useContext(BooksContext)

    console.log(readBooks, wishList, 'readBooks', 'wishList');
    return (
        <div>
            
        </div>
    );
};

export default ListedBooks;