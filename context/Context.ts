"use client";

import React, { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";

// Define the type for the children prop
interface ContextAuthProps {
  children: ReactNode;
}

const ContextAuth = ({ children }: ContextAuthProps) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export default ContextAuth;