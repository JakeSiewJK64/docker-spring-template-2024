"use client";

import { logoutAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const logout = async () => {
    await logoutAction().then(() => {
      router.push("/auth/login");
    });
  };

  return (
    <Card className="rounded-sm p-3 m-2 flex">
      <p className="my-auto">My Application</p>
      <Button onClick={logout} className="ml-auto">Logout</Button>
    </Card>
  );
};

export default Navbar;
