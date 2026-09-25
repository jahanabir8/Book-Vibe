import ReadButton from "@/app/Components/bookdetails/ReadButton";
import WishListButton from "@/app/Components/bookdetails/WishListButton";
import Image from "next/image";
import React from "react";
import { getBookById } from "@/app/lib/books";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ bookId: string }>;
}

const BookDetailsPage = async ({ params }: PageProps) => {
  const { bookId } = await params;

  const book = await getBookById(bookId);

  if (!book) {
    notFound();
  }

  const { tags } = book;

  return (
    <div>
      <section className="bg-pink-50 relative overflow-hidden">
        {/* Decorative background stripes */}
        <div className="absolute" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Book Cover */}
          <div className="flex justify-center">
            <div className="relative w-72 h-96 shadow-2xl rounded-sm overflow-hidden">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                className="object-cover"
              ></Image>
            </div>
          </div>

          {/* Right: Book Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {book.bookName}
            </h1>
            <p className="text-gray-700 mb-4">By : {book.author}</p>

            <div className="border-t border-gray-300 pt-3 mb-4">
              <p className="text-gray-800 font-medium">{book.category}</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-800 leading-relaxed">
                <span className="font-semibold">Review : </span>
                {book.review}
              </p>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gray-700 font-medium">Tag</span>
              {tags.map((tag) => (
                <span key={tag} className="text-green-700 font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-[160px_1fr] gap-y-2 mb-8 text-sm">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="text-gray-900 font-semibold">
                {book.totalPages}
              </span>

              <span className="text-gray-500">Publisher:</span>
              <span className="text-gray-900 font-semibold">
                {book.publisher}
              </span>

              <span className="text-gray-500">Year of Publishing:</span>
              <span className="text-gray-900 font-semibold">
                {book.yearOfPublishing}
              </span>

              <span className="text-gray-500">Rating:</span>
              <span className="text-gray-900 font-semibold">{book.rating}</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <ReadButton book={book}></ReadButton>
              <WishListButton book={book}></WishListButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetailsPage;
