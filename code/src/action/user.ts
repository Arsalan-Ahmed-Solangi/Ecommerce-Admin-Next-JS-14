"use server";

import { db } from "@/lib/db";
import { signIn } from "../../auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export const loginSignup = async (formData: FormData, isLogin: boolean) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await db.user.findUnique({
    where: { email },
    select: { isAdmin: true },
  });

  const res = await signIn("credentials", {
    name,
    email,
    password,
    isLogin,
    redirect: true,
    callbackUrl: "/",
  })
    .then(() => {
      redirect("/");
    })
    .catch((err) => {
      if (err?.toString() == "Error: NEXT_REDIRECT") {
        user?.isAdmin ? redirect("/dashboard") : redirect("/");
      } else return { error: err?.type };
    });

  console.log("Working", res?.error);
  if (!isLogin && res?.error) {
    return { error: "credentials already exists" };
  } else {
    return { error: "wrong credentials" };
  }
};

//****UpdateUsers******//
export const updateUser = async (
  id: string,
  userId: string,
  isAdmin: boolean
) => {
  let product;
  try {
    product = await db.product.update({
      where: { id },
      data: { userId },
    });

    if (!product) {
        return { error: "failed to transfer" };
      }
  } catch (error) {
    return { error: "failed to transfer" };
  }

  revalidatePath(` ${isAdmin ? "/dashboard" : "/"} `);
  return product;
};
