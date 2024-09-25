import NextAuth from "next-auth"
import { NextResponse, NextRequest } from "next/server"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt";



const prisma = new PrismaClient()


export const OPTIONS : NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter({ prisma }),
  providers : [ 
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username :  {  } ,
        password: { },
      },
      async authorize(credentials) {
        // Add your own authentication logic here
        // For example, you can use a database to check if the credentials are valid
        console.log(credentials)
        const {username, password} = credentials
        if(username === undefined || password === undefined)
          return NextResponse.json('user not exit', { status: 401 })  
        const user =  await prisma.user.findUnique({
          where: {
            username : username,
        }})
        if (user && bcrypt.compareSync(password, user.password)) {
          return user
      } else {
          return null
      } 
      },
    }),
  ],
  session: {
    strategy: 'jwt', // or 'database' depending on your setup
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.id = user.id
        token.name = user.username
      }
      return token
    },
    async session({ session, token }) {
      // Add token information to session if needed
      session.user.id = token?.id
      // session.user.name = token?.username
      return session;
    },
  },
  pages: {
    signIn:  '/Login',  // Custom sign-in page
  //   signOut: '/auth/signout', // Custom sign-out page
  //   error: '/auth/error', // Custom error page
  },
}



const handler = NextAuth(OPTIONS)

export { handler as GET, handler as POST}