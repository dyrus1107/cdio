import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center gap-16 px-16 bg-background z-[9999]">
      <div>
        <Logo />
      </div>
      <div className="flex gap-1">
        <p className="py-1.5 px-2.5 hover:text-primary cursor-pointer border-b-4 border-transparent hover:border-primary font-semibold text-md">
          Features
        </p>
        <p className="py-1.5 px-2.5 hover:text-primary cursor-pointer border-b-4 border-transparent hover:border-primary font-semibold text-md">
          Companion AI
        </p>
        <p className="py-1.5 px-2.5 hover:text-primary cursor-pointer border-b-4 border-transparent hover:border-primary font-semibold text-md">
          Download
        </p>
        <p className="py-1.5 px-2.5 hover:text-primary cursor-pointer border-b-4 border-transparent hover:border-primary font-semibold text-md">
          About
        </p>
      </div>
      <div className="flex items-center ml-auto gap-1">
        <Button
          variant="ghost"
          className="hover:text-background font-semibold text-md"
        >
          Sign in
        </Button>
        <Button className="font-semibold hover:bg-muted-primary mr-2 text-md">
          Start here
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
