

import Feed from "@/components/Feed";

const Home = () => (
    <section className='p-2 w-full flex-center flex-col'>
        <h1 className='font-bold text-5xl text-center'>
            <div>Discover & Share</div>
            <br className='max-md:hidden' />
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500'> AI-Powered Prompts</span>
        </h1>
        <p className='text-center text-gray-500'>
            Promptopia is an open-source AI prompting tool for modern world to
            discover, create and share creative prompts
        </p>

        <Feed />
    </section>
);

export default Home;
