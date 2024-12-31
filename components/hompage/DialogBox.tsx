


"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { useState, useEffect } from "react";

export function DialogBox() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      setIsOpen(true);
    }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild>
      </DialogTrigger> */}
      <DialogContent className="max-w-[325px] md:max-w-[700px]  bg-white text-black border-none">
        <DialogHeader>
          {/* <DialogTitle>Edit profile</DialogTitle> */}
          <DialogDescription className="py-4 px-2 md:text-lg text-start">
          <strong>Hi, we’re ackresponse. </strong>Thank you for visiting our website. We’re almost there with our website completion, 
          please bear with us. You may find some incomplete contents here and there. We cannot wait to go officially 
          live soon and offer our services to supercharge and empower your business for success tomorrow, today.
          </DialogDescription>
        </DialogHeader>
        {/* <DialogFooter>
        <Button className="" onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
