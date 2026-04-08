import React from 'react'
import { ContactType } from '../_types/contact'
import { FaEdit } from "react-icons/fa";
import DeleteButton from './DeleteButton';
import Link from "next/link";
import { deleteContactAction } from '../actions/contact';

const ContactList = ({ contacts }: { contacts: ContactType[] }) => {
    return (
        <div className="space-y-4">
            {contacts.map((contact) => (
                <div
                    key={contact.id}
                    className="border p-3 rounded flex items-center justify-between"
                >
                    <div>
                        <p className="font-semibold">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.email}</p>
                    </div>
                    <div className="flex gap-2">
                        
                            <Link href={`/contact/edit/${contact.id}`}>
                                < FaEdit />
                                Edit
                            </Link>
                        <button className="bg-red-500 text-white px-2 py-1 rounded">
                            <DeleteButton action={deleteContactAction} contact={contact}/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactList