"use server";

import { cookies } from "next/headers";
import { UserType } from "../_types/user";

//? Set session cookie
export const setSession = async (userId: string) => {
    const cookieStore = await cookies();
    cookieStore.set("session", userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
}


//? Get session cookie
export const getSession = async (): Promise< string | null > =>{
    const cookieStore = await cookies();
    const userId =  cookieStore.get("session")?.value;
    if(!userId) return null;
    return userId;
}

//? Delete session cookie

export const deleteSession = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}