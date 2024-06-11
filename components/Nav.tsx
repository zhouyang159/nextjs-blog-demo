"use client"

import Link from "next/link";
import Image from "next/image";

import {useEffect, useState} from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";

const Nav = () => {
    // const {data: session} = useSession();

    const [providers, setProviders] = useState(null);


    // useEffect(() => {
    //     (async () => {
    //         const res = await getProviders();
    //         console.log(res, 222)
    //         setProviders(res);
    //     })();
    // }, [])


    return (
        <nav className="p-1 flex justify-between">
            <Link
                href='/'
                className='text-lg font-bold'
            >
                <Image
                    src='/assets/images/logo.svg'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-contain'
                />
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {/*{session?.user ? (*/}
                {/*    <div className='flex gap-3 md:gap-5'>*/}
                {/*        <Link href='/create-prompt' className='black_btn'>*/}
                {/*            Create Post*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*) : (*/}
                {/*    <>*/}
                {/*        <button*/}
                {/*            type='button'*/}
                {/*            // key={provider.name}*/}
                {/*            // onClick={() => {*/}
                {/*            //     signIn(provider.id);*/}
                {/*            // }}*/}
                {/*            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'*/}
                {/*        >*/}
                {/*            Desktop Sign in*/}
                {/*        </button>*/}
                {/*    </>*/}
                {/*)}*/}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex">
                <button
                    type='button'
                    onClick={() => {
                        signIn('google');
                    }}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    Mobile Sign in
                </button>
            </div>
        </nav>
    )
}

export default Nav;
