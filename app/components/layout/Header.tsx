import { Button } from "../ui/Button";
import Link from "next/link";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const Header = () => {
  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center mx-4 md:mx-8 my-4 gap-3">
        <Link
          href="/"
          className={`${cormorant.className} text-3xl font-semibold`}
        >
          Portfolio
        </Link>
        <div className="flex text-sm md:text-md gap-3">
          <Button redirectLink={"/about"} textInput={"About"} />
          <Button redirectLink={"/projects"} textInput={"Projects"} />
          <Button redirectLink={"/contact"} textInput={"Contact"} />
        </div>
      </div>
    </header>
  );
};
