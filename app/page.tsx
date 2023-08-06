import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center px-7">
      <article className='grid rounded-xl overflow-hidden text-white
        desktop:grid-cols-2 max-w-[800px]'>
        <section className='bg-white px-5 py-7 grid gap-5 desktop:col-span-2 desktop:px-10'>
          <h1 className='text-cyan font-heavy text-xl'>
            Join our community
          </h1>
          <h2 className='text-bright_yellow font-heavy'>
            30-day, hassle-free money back guarantee
          </h2>
          <p className='text-grayish_blue text-sm'>
            Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.
          </p>
        </section>
        <section className='bg-cyan px-5 py-7 grid gap-2 desktop:px-10'>
          <h2>
            Monthly Subscription
          </h2>
          <div className='flex items-center gap-3'>
            <p className='font-heavy text-2xl'>
              $29 
            </p>
            <span className='text-white/70'>
              per month
            </span>
          </div>
          <p>
            Full access for less than $1 a day
          </p>
          <button className='bg-bright_yellow py-3 rounded-lg shadow-xl mt-5'>
            Sign Up
          </button>
        </section>
        <section className='bg-cyan/80 px-5 py-7 grid gap-2 desktop:px-10'>
          <h2>
            Why Us
          </h2>
          <ul className='text-white/80 text-sm'>
            <li>
              Tutorials by industry experts
            </li>
            <li>
              Peer & expert code review
            </li>
            <li>
              Coding exercises
            </li>
            <li>
              Access to our GitHub repos
            </li>
            <li>
              Community Forum
            </li>
            <li>
              Flashcard decks
            </li>
            <li>
              New videos every week
            </li>
          </ul>
        </section>
      </article>
    </main>
  )
}
