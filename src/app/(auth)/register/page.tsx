import React from 'react'
import RegisterForm from '@/app/_components/RegisterForm';
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
            <h1 className='text-2xl font-bold mb-6'>Create an account</h1>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage;