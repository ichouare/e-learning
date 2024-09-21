import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const options : NextAuthOptions = {
  providers : [ 
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username :  { label: "username", type: "text", placeholder: "username" } ,
        password: { label: "password", type: "password", placeholder: "password" },
      },
      async authorize(credentials) {
        // Add your own authentication logic here
        // For example, you can use a database to check if the credentials are valid
        const user = {id: 1 , username : "issam" , "password" : "password" }
        if (credentials?.username === user.username && credentials?.password === user.password) {
          return user
        } else {
          return null
        }
      },
    })

  ],
  pages: {
    signIn: '/auth/signin',  // Custom sign-in page
    signOut: '/auth/signout', // Custom sign-out page
    error: '/auth/error', // Custom error page
  },
}

const handler = NextAuth(options)

export { handler as GET, handler as POST }