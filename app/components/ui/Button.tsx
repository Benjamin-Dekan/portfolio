"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ButtonProps {
  redirectLink: string;
  textInput: string;
}

export const Button = ({ redirectLink, textInput }: ButtonProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={`px-4 py-1 rounded-full ring-2 ring-black/30 ${pathname === redirectLink ? "ring-blue-500" : ""}`}
      href={redirectLink}
    >
      {textInput}
    </Link>
  );
};
