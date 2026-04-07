'use client'

import React from 'react'
import { registerAction } from '../actions/auth'

const RegisterPage = () => {
    return (
        <form
            action={ registerAction }
            className='space-x-4'>
            <div>
                <label className='block text-sm font-bold text-gray-800'>User</label>
                <input type="text"
                    name="name"
                    placeholder='Give your name'
                    required
                    autoComplete="off"
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
                />
            </div>
            <div>
                <label className='block text-sm font-bold text-gray-800'>Email</label>
                <input type="email"
                    name="email"
                    placeholder='Give your email'
                    required
                    autoComplete="off"
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
                />
            </div>
            <div>
                <label className='block text-sm font-bold text-gray-800'>Password</label>
                <input type="password"
                    name="password"
                    placeholder='Give your password'
                    required
                    autoComplete="off"
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
                />
            </div>
            <button
                type="submit"
                className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent 700 bg-blue-500 rounded-2xl"
            >Register</button>
        </form>
    )
}

export default RegisterPage