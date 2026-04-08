'use client'
import React, { useActionState } from 'react'
import { ContactType } from '../_types/contact';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type ContactFormProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
}

const ContactForm = ({ action, contact }: ContactFormProps) => {
  const router = useRouter();
  const [state, formAction] = useActionState(action, null);
  
  useEffect(()=>{
    if(state?.success){
      router.push("/contact");
    }
  },[state,router])

  return (
    <form action={formAction}
      className='space-x-4'>
      <div>
        <label htmlFor="name" className='block text-sm font-bold text-gray-800'>
          Name
        </label>
        <input type="name"
          name="name"
          placeholder='Give your name'
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
        />
      </div>
      <div>
        <label htmlFor="email" className='block text-sm font-bold text-gray-800'>
          Email</label>
        <input type="email"
          name="email"
          placeholder='Give your email'
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
        />
      </div>
      <button
        type="submit"
        className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent 700 bg-blue-500 rounded-2xl"
      >Save Contact
      </button>
    </form>
  )
}

export default ContactForm