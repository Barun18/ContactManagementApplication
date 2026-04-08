import React from 'react'
import ContactForm from "@/app/_components/ContactForm"; 
import {createContactAction} from "@/app/actions/contact"
const NewPage = () => {
  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-emerald-100'>
      <h1 className='text-2xl font-bold mb-6'>Create new contact</h1>
      <ContactForm action={createContactAction}/>
      </div>
  )
}

export default NewPage;