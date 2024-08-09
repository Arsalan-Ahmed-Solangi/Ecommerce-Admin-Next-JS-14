import Link from "next/link";
import React from "react";
import { auth, signOut } from "../../auth";
import { Button } from "./ui/button";

async function AppBar() {
  const session = await auth();

  return (
    <div className="flex shadow-sm justify-between w-full h-14 lg:h-16 items-center border-b bg-custom text-white text-bold">
      {session && session?.user ? (
        <>
          <h2 className="p-5 font-bold uppercase decoration-solid decoration-10">
            Welcome {session?.user?.name}
          </h2>
        </>
      ) : (
        <>
          <h2 className="p-5 font-bold uppercase decoration-solid decoration-10">
            Ecommerce Admin
          </h2>
        </>
      )}
      <div className="ml-auto pr-5">
        {session && session?.user ? (
          <>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button type="submit">Sign Out</Button>
            </form>
          </>
        ) : (
          <div className="flex gap-2">
            <Link href={"login"} className="font-bold p-2">
              Login
            </Link>
            <Link href={"signup"} className="font-bold p-2">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppBar;
