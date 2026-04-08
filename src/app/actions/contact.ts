'use server'
import { revalidatePath } from "next/cache";
import { createContact, deleteContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

export const createContactAction = async (
    prevState: any,
    formData: FormData
) => {
    if (!formData) {
        return { error: "Form data is missing" };
    }
    const userId = await getSession();
    if (!userId) {
        return { error: "User not authenticated" }
    }
    const newContact: ContactType = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: userId
    };
    try {
        await createContact(newContact);
        revalidatePath("/contact");
        return { success: true }
    } catch (error) {
        console.log("Error Creating Contact:", error);
        return { error: "failed to create contact" };
    }
}
export const updateContactAction = async (
    prevState: any,
    formData: FormData
) => { }

export const deleteContactAction = async (prevState: any, formData: FormData) => {
    const id = formData.get("id") as string;
    try {
        await deleteContact(id);
        revalidatePath("/contact");
        return { success: true };
    } catch (error) {
        console.log("Error Deleting Contact:", error);
        return { error: "failed to delete contact" };
    }
}