import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";
const prisma = new PrismaClient()

 //create type alias for user object
 type User = {
    username: string;
    email: string;
    password: string;
}


export async function  GET() {
    return NextResponse.json({"user": {username: "issam"}})
}




export async function POST(request: Request){
    console.log("is starting................")
    const res = await request.json()
    // get data form request data and save it in database if is successful return 201 created if not return esponse with 400 bad request error

    if(res.username === undefined || res.password === undefined)
        return NextResponse.json('user not exit', { status: 401 })  
    const user =  await prisma.user.findUnique({
        where: {
            username : res.username,
           
        }
    })
    if (user && bcrypt.compareSync(res.password, user.password)) {
        return NextResponse.json('User exists', { status: 200 });
    } else {
        return NextResponse.json('Invalid username or password', { status: 401 });
    } 
}