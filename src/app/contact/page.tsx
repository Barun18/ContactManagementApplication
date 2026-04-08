import React from 'react'
import { getSession } from '../_lib/session';
import { redirect } from 'next/navigation';
import { getContacts } from '../api/contact';

const Contactpage = async () => {
  const userId = await getSession();

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
    <div>ContactPage</div>
  )
}

export default Contactpage;