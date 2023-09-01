import Feed from '@/components/Feed'

export default function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      {/* Introduce */}
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden'></br>
        <span className='orange_gradient text-center'>AI-Powred Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is an open-source AI prompting tool for modern world to discover, create and
        share creative prompts
      </p>

      {/* Feed  */}
      <Feed />
    </section>
  )
}
