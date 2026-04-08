'use client'

import { FaTrash } from "react-icons/fa";
import { ContactType } from "../_types/contact";
import { useActionState } from "react";

type props = {
    action: (prevState: any, formData:FormData) => Promise<any>;
    contact?: ContactType
}

const DeleteButton = ({ contact,action }: props) => {
const [state, formAction] = useActionState(action, null);
    return (
        <form action={ formAction }
            method="post">
            <input type="hidden" name="id" value={contact?.id} />
            <button type="submit"
                onClick={(e) => {
                    if (!confirm("Are you sure want to delete this contact?")) {
                        e.preventDefault();
                    }
                }}>
                <FaTrash className="text-red-500" />
                Delete
            </button>

        </form>
    )
}

export default DeleteButton