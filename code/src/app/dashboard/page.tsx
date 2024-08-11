import React from "react";

import DashboardDataTable from "@/components/DashboardDataTable";
import { db } from "@/lib/db";

async function Dashboard() {
  //****Transactions*****//
  const [productData, clients] = await db.$transaction([
    db.product.findMany(),
    db.user.findMany(),
  ]);

  const response = productData?.map((val: any) => {
    return [...val, clients];
  });
  return (
    <>
      <DashboardDataTable />
    </>
  );
}

export default Dashboard;
