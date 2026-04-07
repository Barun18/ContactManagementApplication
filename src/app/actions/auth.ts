'use server'

import { redirect } from "next/navigation";
import axios from "axios";
import type { UserType } from "../_types/user";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";


export const loginAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const emailStr = email?.toString().trim() || "";
  const passwordStr = password?.toString().trim() || "";

  if (emailStr === "" || passwordStr === "") {
    throw new Error(" Both email and password are required ");
  }

  const response = await axios.get(`${API_URL}/users`);
  const user = response.data.find(
    (u: any) =>
      u.email === emailStr && u.password === passwordStr
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }
  //? set user in the cookie
  await setSession(user.id);
  redirect("/contact");

};

export const registerAction = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const nameStr = name?.toString().trim() || "";
  const emailStr = email?.toString().trim() || "";
  const passwordStr = password?.toString().trim() || "";

  if(!nameStr || !emailStr || !passwordStr){
    throw new Error("Fill All the fields");
  }

  //Checking user is exist or not
  const response = await axios.get(`${API_URL}/users`);
  const existingUser = response.data.find( 
    (u:any) => u.email === emailStr
  )

  if(existingUser){
    throw new Error("User is already Exists");
  }

  //Creating new User
  const newUser = {
    name: nameStr,
    email: emailStr,
    password: passwordStr
  }
  
  const res = await axios.post(`${API_URL}/users`, newUser);
  console.log("New user Registered",res.data);
  redirect("/login");
}


export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
}