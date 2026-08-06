import Link from "next/link";

interface ButtonProps {
  redirectLink: string;
  textInput: string;
}
export const Button = ({ redirectLink, textInput }: ButtonProps) => {
  return (
    <Link
      className="px-4 py-1 rounded-full ring-2 ring-black/30 "
      href={`${redirectLink}`}
    >{`${textInput}`}</Link>
  );
};
