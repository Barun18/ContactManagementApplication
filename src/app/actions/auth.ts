'use server'

import { redirect } from "next/navigation";
import axios from "axios";
import type { UserType } from "../_types/user";

const API_URL = "http://localhost:3001";

// export const loginAction = async (formData: FormData) => {
//     try {
//         const response = await axios.get(`${API_URL}/users?email=${formData.get(
//             "email")}&password=${formData.get(
//                 "password")}`
//         )
//         const user: UserType = response.data[0]
//         if(!user) throw new Error("Invalid credentials");

//     //Set user in the cookie
//     redirect("/contact");

//     } catch (error) {
//         throw new Error("Failed to login");
//     }
// }




export const loginAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("RAW EMAIL:", email);
  console.log("RAW PASSWORD:", password);

  const emailStr = email?.toString().trim();
  const passwordStr = password?.toString().trim();

  console.log("FINAL EMAIL:", emailStr);
  console.log("FINAL PASSWORD:", passwordStr);

  const response = await axios.get("http://localhost:3001/users");

  console.log("ALL USERS:", response.data);

  const user = response.data.find(
    (u: any) =>
      u.email === emailStr && u.password === passwordStr
  );

  console.log("MATCHED USER:", user);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  redirect("/contact");
};


export const logout = async () => {
    redirect("/login");
}