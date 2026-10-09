import Link from 'next/link'

type BookCardProps = {
  title: string
  author: string
  coverURL: string
  coverColor: string
  slug: string
}

const BookCard = ({ title, author, coverURL, coverColor, slug }: BookCardProps) => (
  <Link
    href={`/books/${slug}`}
    className="group overflow-hidden rounded-2xl bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
  >
    <div
      role="img"
      aria-label={`${title} book cover`}
      className="aspect-[3/4] rounded-xl bg-cover bg-center"
      style={{
        backgroundColor: coverColor,
        backgroundImage: `url("${coverURL}")`,
      }}
    />
    <div className="px-1 pb-1 pt-3">
      <h2 className="truncate font-serif font-semibold text-[#3b2a20] group-hover:underline">
        {title}
      </h2>
      <p className="mt-1 truncate text-sm text-[#7a6552]">{author}</p>
    </div>
  </Link>
)

export default BookCard
