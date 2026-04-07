import Link from 'next/link'
import React from 'react'
import Logoutbtn from './Logoutbtn';
import { getSession } from '../_lib/session';


const Navbar = async () => {
    const session = await getSession();

    return (
        <nav className='bg-white shadow-sm'>
            <div className='container mx-auto p-4 flex justify-between items-center'>
                <Link href="/" className="text-xl font-bold text-blue-600" >
                    Contact Manager
                </Link>
                <div className=" flex items-center space-x-4">
                    {session ? (
                        <>
                            <Link href="/contact" className='hover:text-blue-800 mr-8'>
                                contacts
                            </Link>
                            <Logoutbtn />
                        </>
                    ) : (
                        <>
                        <Link href="/login" className='hover: tesxt-blue-600 mr-8'>Login</Link>
                        <Link href="/register" className='hover: tesxt-blue-600 mr-8'>Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar