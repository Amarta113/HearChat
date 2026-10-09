import HeroSection from '@/components/HeroSection'
import { SampleBooks } from '@/lib/constants'
import BookCard from '@/components/BookCard'

const Page = () => {
  return (
    <main>
      <HeroSection />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 pb-12 sm:grid-cols-3 lg:grid-cols-4">
        {SampleBooks.map((book) => (
          <BookCard key={book._id}
            title={book.title}
            author={book.author}
            coverURL={book.coverURL}
            coverColor={book.coverColor}
            slug={book.slug}
          />
        ))}
      </div>
    </main>
  )
}

export default Page