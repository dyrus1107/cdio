import { ChevronsLeft, MenuIcon, Plus, PlusCircle } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Item from "./item";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { toast } from "sonner";
import { DocumentList } from "./document-list";

const Navigation = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:768px)");
  const create = useMutation(api.documents.create);

  const handleCreate = () => {
    const promise = create({
      title: `Untilted ${Math.floor(Math.random() * 6554)}`,
    });
    // .then(documentId =>
    //   router.push(`/documents/${documentId}`)
    // );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <>
      <aside
        className={cn(
          "group/sidebar bg-gray-200 w-60 overflow-y-auto relative flex flex-col",
          isMobile && "w-0"
        )}
      >
        <div
          role="button"
          className={cn(
            "absolute top-2 right-2 hover:bg-gray-300 opacity-0  rounded-md transition-all group-hover/sidebar:opacity-100",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div className="mt-4">
          <DocumentList />
        </div>
        {/* <UserItem /> */}
        <div>
          <Item onClick={handleCreate} label="New page" icon={PlusCircle} />
        </div>
        <div className="opacity-0 transition group-hover/sidebar:opacity-100 absolute top-0 right-0 h-full w-1 bg-gray-400 cursor-ew-resize"></div>
      </aside>
      <div
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)] h-8 bg-secondary",
          isMobile && "left-0 w-full"
        )}
      ></div>
    </>
  );
};

export default Navigation;
