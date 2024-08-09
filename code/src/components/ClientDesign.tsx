import { db } from "@/lib/db";
import React from "react";
import ClientProduct from "./ClientProduct";

async function ClientDesign({ user }: any) {
  const clients = await db.user.findMany({
    where: {
      NOT: {
        id: user?.id,
      },
      isAdmin: false,
    },
  });
  const response = {
    ...user,
    Product: user?.Product?.map((product: any) => {
      return { ...product, clients };
    }),
  };

  return <ClientProduct user={response}/>;
}

export default ClientDesign;
