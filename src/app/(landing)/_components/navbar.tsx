"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
      <div className="flex items-center ml-auto gap-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton>
              <Button
                variant="ghost"
                className="hover:text-background font-semibold text-md"
              >
                Sign in
              </Button>
            </SignInButton>
            <SignInButton>
              <Button className="font-semibold hover:bg-muted-primary mr-2 text-md">
                Let&apos;s Start
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button  size="sm" asChild >
              <Link href="/documents">Enter Stumate</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
