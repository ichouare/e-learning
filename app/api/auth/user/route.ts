import { NextResponse } from "next/server"
 //create type alias for user object
 type User = {
    username?: string;
    email?: string;
    password?: string;
}


export async function  GET() {
    return NextResponse.json({"user": {username: "issam"}})
}


export async function POST(request: Request){
    const data : User = await request.json();
    // get data form request data and save it in database if is successful return 201 created if not return esponse with 400 bad request error
    console.log(data);
    return NextResponse.json("user is created successfully", {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
