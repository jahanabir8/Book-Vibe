import Image from "next/image";
import Link from "next/link";
import { BookType } from "../../types/BookType";

export interface BookCardProps {
  book: BookType;
}

export default function ListedBookCard({ book }: BookCardProps) {
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
    <div className="relative overflow-hidden rounded-2xl border border-pink-200 bg-pink-50/60 p-4">
      {/* Decorative background stripes */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_28px,rgba(255,255,255,0.6)_28px,rgba(255,255,255,0.6)_56px)] pointer-events-none" />

      <div className="relative flex gap-5">
        {/* Book Cover */}
        <div className="relative h-40 w-28 shrink-0 overflow-hidden rounded-lg shadow-md">
          <Image src={image} alt={bookName} fill className="object-cover" />
        </div>

        {/* Book Content */}
        <div className="flex flex-1 flex-col justify-between py-1">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{bookName}</h2>
            <p className="mt-1 text-sm text-gray-700">By : {author}</p>

            {/* Tags + Year */}
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800">Tag</span>
                {tags.map((tag) => (
                  <span key={tag} className="font-medium text-green-600">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-gray-600">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Year of Publishing: {yearOfPublishing}
              </div>
            </div>

            {/* Publisher + Pages */}
            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-4a4 4 0 10-6 0 4 4 0 006 0zm6 0a4 4 0 10-8 0 4 4 0 008 0z"
                  />
                </svg>
                Publisher: {publisher}
              </div>

              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Page {totalPages}
              </div>
            </div>
          </div>

          {/* Bottom row: badges + button */}
          <div className="mt-4 flex items-center gap-3 border-t border-pink-200 pt-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Category: {category}
            </span>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
              Rating: {rating}
            </span>

            <Link href={`/books/${id}`} className="ml-auto">
              <button className="rounded-xl bg-green-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-green-700 cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}