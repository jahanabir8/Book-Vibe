import React from 'react';

const getBooksData = async()=>{
    const res = await fetch('http://localhost:3000/booksData.json')
    return await res.json()
}

const Books = async() => {
    const BooksData = await getBooksData()
    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h2 className='text-center font-bold text-[40px] mb-9'>Books {BooksData.length}</h2>
            </div>
        </section>
    );
};

export default Books;