import { Button } from "../ui/Button";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center mx-8 my-4">
        <Link href="/" className="text-2xl font-semibold">
          Portfolio
        </Link>
        <div className="flex gap-3">
          <Button redirectLink={"/about"} textInput={"About"} />
          <Button redirectLink={"/projects"} textInput={"Projects"} />
          <Button redirectLink={"/contact"} textInput={"Contact"} />
        </div>
      </div>
    </header>
  );
};
