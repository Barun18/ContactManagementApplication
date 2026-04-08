"use server";

import { cookies } from "next/headers";
import { UserType } from "../_types/user";

//? Set session cookie
export const setSession = async (userId: number) => {
    const cookieStore = await cookies();
    cookieStore.set("session", String(userId), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
}


//? Get session cookie
export const getSession = async (): Promise< number | null > =>{
    const cookieStore = await cookies();
    const userId =  cookieStore.get("session")?.value;
    if(!userId) return null;
    return  Number(userId);
}

//? Delete session cookie

export const deleteSession = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}