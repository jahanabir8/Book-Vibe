import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BookType } from "../../types/BookType";

export interface BookCardProps {
  book: BookType;
}

export default function BookCard({ book }: BookCardProps) {
  const {
    id,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Book Cover */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={bookName}
          unoptimized
          width={600}
          height={400}
          className="..."
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
          {category}
        </span>

        {/* Rating Badge */}
        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
          <span className="text-yellow-400">★</span>
          {rating}
        </span>
      </div>

      {/* Book Content */}
      <div className="p-5">
        {/* Publisher */}
        <p className="mb-1 text-sm font-medium text-gray-500">{publisher}</p>

        {/* Book Name */}
        <h2 className="mb-1 line-clamp-1 text-xl font-bold text-gray-900">
          {bookName}
        </h2>

        {/* Author */}
        <p className="mb-3 text-sm text-gray-600">by {author}</p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta info: pages & year */}
        <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
          <span>{totalPages} pages</span>
          <span className="text-gray-300">•</span>
          <span>{yearOfPublishing}</span>
        </div>

        {/* Button */}
        <div className="border-t border-gray-100 pt-4">
          <Link href={`/books/${id}`}>
            <button className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
