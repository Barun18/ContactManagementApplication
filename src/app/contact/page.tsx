import React from 'react'
import { getSession } from '../_lib/session';
import { redirect } from 'next/navigation';
import { getContacts } from '../api/contact';
import ContactList from '../_components/ContactList';

const Contactpage = async () => {
  const userId:any = await getSession();
  console.log("session userId:", userId, typeof userId);
  
  if (!userId) {
    redirect("/login");
  }
  const contacts = await getContacts(userId)
  console.log("cont:",contacts);
  
  if (!contacts || contacts.length === 0) {
    return (
      <div>
        please{" "}
        <a href="/contact/new" className='text-blue-600 hover:underline'>
          Add a contact
        </a> {" "}
        to your contact list
      </div>
    )
  }
  return (
    <div>
      <div className='flex justify-between items-center mb-6'
      >
        <h2>Your Contacts</h2>
        <a href="/contact/new"
        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl'
        >
          Add Contact
        </a>
      </div>
      < ContactList contacts={contacts}/>
    </div>
  )
}

export default Contactpage;