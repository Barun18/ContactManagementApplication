import React from 'react'
import { getSession } from '../_lib/session';
import { redirect } from 'next/navigation';

const Contactpage = async () => {
const userId = await getSession();
if(!userId) {
  redirect("/login");
}
  return (
    <div>ContactPage</div>
  )
}

export default Contactpage;