import AppBar from "@/components/AppBar";
import AuthDesign from "@/components/AuthDesign";
import Image from "next/image";
import { auth } from "../../auth";
import { Session } from "inspector";
import { db } from "@/lib/db";
import ClientDesign from "@/components/ClientDesign";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
 
  if (session) {
    const user = await db.user.findUnique({
      where: { email: session?.user?.email! },
      include: { Product: true },
    });
  
    if (user && !user?.isAdmin) {
      return (
        <>
          <AppBar />
          <ClientDesign user={user}/>
        </>
      );
    } else if (user && user?.isAdmin) {
      redirect("/dashboard");
    } else {
      return (
        <div className="">
          {/* Start of Navigation */}
          <AppBar />
          {/* End of Navigation */}

          {/* Start of ClientSideDesign */}
          <AuthDesign />
          {/* End of ClientSideDesign */}
        </div>
      );
    }
  }else{

    return (
      <div className="">
        {/* Start of Navigation */}
        <AppBar />
        {/* End of Navigation */}

        {/* Start of ClientSideDesign */}
        <AuthDesign />
        {/* End of ClientSideDesign */}
      </div>
    );
  }
}
