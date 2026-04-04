'use client'
import React from 'react'

const LoginForm = () => {
    return (
        <form className='space-x-4'>
            <div>
                <label htmlFor="">Email</label>
                <input type="email"
                    name="email"
                    placeholder='Give your email'
                    required 
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
                    />
                <label htmlFor="">Password</label>
                <input type="password"
                    name="password"
                    placeholder='Give your password'
                    required 
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
                    />
            </div>
        </form>
    )
}

export default LoginForm