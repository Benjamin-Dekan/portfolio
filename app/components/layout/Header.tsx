import { Button } from "../ui/Button";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center mx-8 my-4">
        <div className="text-2xl font-semibold">Portfolio</div>
        <div className="flex gap-3">
          <Button redirectLink={"/about"} textInput={"About"} />
          <Button redirectLink={"/projects"} textInput={"Projects"} />
          <Button redirectLink={"/contact"} textInput={"Contact"} />
        </div>
      </div>
    </header>
  );
};
