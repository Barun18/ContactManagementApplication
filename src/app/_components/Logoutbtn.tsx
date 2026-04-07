'use client'
import React from 'react'
import { logoutAction } from '../actions/auth';

const Logoutbtn = () => {
  return (
    <div>
      <form action={logoutAction}>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          type='submit'>
          LogoutButton
        </button>
      </form>
    </div>
  )
}

export default Logoutbtn;