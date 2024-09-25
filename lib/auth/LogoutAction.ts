"use server"
import { useSession, signIn, signOut } from 'next-auth/react';

export default async function LogoutAction(){
    await signOut({ callbackUrl: '/' });
    // revalidatePath("/Login")
    // return { message: "user is logged out successfully"}
}