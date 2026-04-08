
import React from 'react'
import { updateContactAction } from "@/app/actions/contact"
import ContactForm from "@/app/_components/ContactForm"
import { getContactsById } from '@/app/api/contact'


const Edit = async ({ params }: { params:Promise<{ id: string }> }) =>{
  const { id } = await params;
  const contact = await getContactsById(id);
  console.log("The contact to:",contact);
  
  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-emerald-100'>
      <h1 className='text-2xl font-bold mb-6'>Edit contact</h1>
      <ContactForm action={updateContactAction} contact={contact} />
    </div>
  )
}

export default Edit;