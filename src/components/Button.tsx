"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

interface ButtonProps {
  session: Session | null;
}

export const Button = ({ session }: ButtonProps) => {
  const handleUser = (e: React.MouseEvent) => {
    e.preventDefault();
    if (session?.user) {
      signOut();
    } else {
      signIn("discord");
    }
  };
  return (
    <button
      onClick={handleUser}
      className="px-4 py-2 border-gray-600 border-[1px] rounded-md"
    >
      {session?.user ? "Log out" : "Log in"}
    </button>
  );
};
