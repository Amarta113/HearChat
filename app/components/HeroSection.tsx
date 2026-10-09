import Link from 'next/link'
import { Plus } from 'lucide-react'

const steps = [
  { title: 'Upload a book', text: 'Add a PDF from your device.' },
  { title: 'Choose a voice', text: 'Pick the narrator you like best.' },
  { title: 'Listen anywhere', text: 'Your audiobook is ready to play.' },
]

const BookAndGlobe = () => (
  <svg
    viewBox="0 0 320 260"
    role="img"
    aria-label="A stack of vintage books beside an antique globe"
    className="w-full max-w-[360px] h-auto"
  >
    <defs>
      <clipPath id="globe-clip">
        <circle cx="232" cy="118" r="58" />
      </clipPath>
    </defs>

    {/* ground shadow */}
    <ellipse cx="160" cy="238" rx="140" ry="9" fill="#3b2a20" opacity="0.12" />

    {/* ---- Books ---- */}
    {/* bottom book */}
    <rect x="22" y="196" width="170" height="38" rx="3" fill="#7a2f2b" />
    <rect x="188" y="199" width="10" height="32" rx="1" fill="#f3e6c8" />
    <path d="M188 204h10M188 209h10M188 214h10M188 219h10M188 224h10" stroke="#d9c79c" strokeWidth="0.8" />
    <path d="M52 196v38M60 196v38M146 196v38M154 196v38" stroke="#d4a64a" strokeWidth="2" />
    <rect x="76" y="207" width="56" height="16" rx="2" fill="#d4a64a" opacity="0.9" />
    <path d="M84 215h40" stroke="#7a2f2b" strokeWidth="2" strokeLinecap="round" />

    {/* top book */}
    <rect x="38" y="160" width="146" height="36" rx="3" fill="#2f4a3e" />
    <rect x="180" y="163" width="10" height="30" rx="1" fill="#f3e6c8" />
    <path d="M180 168h10M180 173h10M180 178h10M180 183h10M180 188h10" stroke="#d9c79c" strokeWidth="0.8" />
    <path d="M62 160v36M69 160v36M140 160v36M147 160v36" stroke="#d4a64a" strokeWidth="2" />
    <rect x="82" y="171" width="48" height="14" rx="2" fill="#e8d7ae" />
    <path d="M90 178h32" stroke="#2f4a3e" strokeWidth="2" strokeLinecap="round" />

    {/* small bookmark ribbon */}
    <path d="M110 196v18l5-4 5 4v-18z" fill="#EAA0A2" />

    {/* ---- Globe ---- */}
    {/* stand */}
    <ellipse cx="232" cy="236" rx="38" ry="7" fill="#5b3d2b" />
    <rect x="228" y="190" width="8" height="46" fill="#8a6a3d" />
    <path d="M232 190c-44-4-70-30-70-72" fill="none" stroke="#b8893a" strokeWidth="5" strokeLinecap="round" opacity="0" />

    <g transform="rotate(-18 232 118)">
      {/* brass meridian ring */}
      <circle cx="232" cy="118" r="69" fill="none" stroke="#b8893a" strokeWidth="4" />
      <circle cx="232" cy="118" r="58" fill="#bcd3cf" />
      <g clipPath="url(#globe-clip)">
        <path
          d="M198 80c10-16 34-14 40 2 5 13-12 20-20 30-8 8-22-6-22-18 0-5 0-9 2-14z"
          fill="#c9a66b"
        />
        <path
          d="M240 126c14-8 32 2 30 20-2 18-20 24-26 12-6-10-12-22-4-32z"
          fill="#9bb083"
        />
        <path d="M186 142c10-6 22 2 18 16-4 10-16 8-18-2-1-5-1-9 0-14z" fill="#c9a66b" />
        {/* graticule */}
        <g fill="none" stroke="#3b2a20" strokeWidth="0.8" opacity="0.28">
          <ellipse cx="232" cy="118" rx="22" ry="58" />
          <ellipse cx="232" cy="118" rx="42" ry="58" />
          <path d="M174 118h116M180 92h104M180 144h104M194 70h76M194 166h76" />
        </g>
        {/* shading */}
        <circle cx="250" cy="136" r="58" fill="#3b2a20" opacity="0.08" />
      </g>
      {/* axis pegs */}
      <circle cx="232" cy="49" r="4" fill="#8a6a3d" />
      <circle cx="232" cy="187" r="4" fill="#8a6a3d" />
    </g>
  </svg>
)

const HeroSection = () => {
  return (
    // pt-28 clears the fixed navbar
    <section className="w-full px-4 sm:px-8 pt-28 pb-10">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#F1E4CF] p-6 sm:p-10 lg:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr_0.9fr] lg:gap-8">
          {/* Left: heading, description, button */}
          <div className="flex flex-col items-start gap-5">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-[#3b2a20]">
              Your Library
            </h1>
            <p className="max-w-sm text-base sm:text-lg leading-relaxed text-[#5b4636]">
              Turn your books into audiobooks and keep every title in one
              place, ready to play whenever you are.
            </p>
            <Link
              href="/books/new"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#3b2a20] px-6 text-sm sm:text-base font-medium text-white transition-colors hover:bg-[#5b3d2b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b2a20]"
            >
              <Plus className="h-4 w-4" strokeWidth={2.5} />
              New book
            </Link>
          </div>

          {/* Center: illustration */}
          <div className="flex justify-center">
            <BookAndGlobe />
          </div>

          {/* Right: how it works */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-serif text-lg font-bold text-[#3b2a20]">
              How it works
            </h2>
            <ol className="flex flex-col gap-4">
              {steps.map(({ title, text }, i) => (
                <li key={title} className="flex items-start gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAA0A2] text-sm font-semibold text-[#3b2a20]"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium leading-snug text-[#3b2a20]">
                      {title}
                    </p>
                    <p className="text-sm text-[#7a6552]">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default HeroSection