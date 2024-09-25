import { NextResponse } from "next/server";
import { getServerSession } from 'next-auth/next';
import { OPTIONS } from "../auth/[...nextauth]/route";


export async function  GET(request: Request) {
    const session = await getServerSession(OPTIONS);

    if (!session) {
    //   If no session, return an unauthorized response
      return NextResponse.json({ data: 'Unauthorized' }, { status: 401 });
    }
    console.log("User is authenticated ------------------------>", session?.user);
    return NextResponse.json({"user": {username: "issam"}})
}