import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

 //create type alias for user object
 type User = {
    username: string;
    email: string;
    password : string;
}



export async function POST(request: Request){
    const res =  await request.json()
    const hashedPassword = bcrypt.hashSync(res?.password, 10);
    // get data form request data and save it in database if is successful return 201 created if not return esponse with 400 bad request error
    const user: User = {
        username: res.username,
        email: res.email,
        password : hashedPassword

    }
    try {
        await prisma.user.create({
            data: user,
        })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Failed to create user' }, { status: 400 })
    }
    return NextResponse.json("user is created successfully", {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
