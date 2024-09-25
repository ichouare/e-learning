'use server'


import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export default async function  createUser(formData: FormData)
{
    const prisma = new PrismaClient()
    const hashedPassword = bcrypt.hashSync(formData.get('password'), 10);
    const user = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: hashedPassword
    }
    if(!user.email || !formData.get('password') || !user.username)  
    {
        console.log("output form server action ")
        return { error: 'Please fill all required !!' }
    }   
    // save user to database
    try {
       await prisma.user.create({
            data: user,
        })
        console.log("is sucessuful create user")
        // revalidatePath("/Login")
    } catch (error) {
        console.error(error)
        return { error: 'Failed to create user !!' }
    }
    return {message: "user is created successfully"}


}