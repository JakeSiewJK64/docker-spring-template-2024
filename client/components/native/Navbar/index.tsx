"use client";

import { Card } from "@/components/ui/card";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  return (
    <Card className="rounded-sm p-3 m-2 flex">
      <p className="my-auto">My Application</p>
      <LogoutButton />
    </Card>
  );
};

export default Navbar;
