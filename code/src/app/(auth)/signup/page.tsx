"use client";
import React, { useOptimistic, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormInput from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FooterForm from "@/components/FooterForm";
import { loginSignup } from "@/action/user";
import { toast } from "sonner";

function SignUp() {
  const [loading, setLoading] = useOptimistic(false);
  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    const res = await loginSignup(formData, false);
    if (res?.error) {

      toast(  res?.error );
    }
    setLoading(false);
  };
  return (
    <div className="grid place-content-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-between gap-1 items-center py-0 w-[450px] shadow-lg rounded-lg bg-white">
        <div className="p-5">
          <h1 className="text-center font-bold mt-5  text-2xl">
            Account Signup Form
          </h1>
          <p className="text-center text-gray-400 mb-4">
            Please fill in the form to create an account
          </p>
        </div>
        <form action={handleSubmit} className="w-full px-5">
          <FormInput
            type={"text"}
            Desc={null}
            label={"Name"}
            placeHolder={"Enter Name"}
            name={"name"}
          />

          <FormInput
            type={"email"}
            label={"Email Address"}
            Desc="Please provide valid email address"
            placeHolder={"Enter Email Address"}
            name={"email"}
          />

          <FormInput
            Desc={null}
            type={"password"}
            label={"Password"}
            placeHolder={"Enter Password"}
            name={"password"}
          />

          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className={` ${ loading && 'disabled cursor-not-allowed' } w-md items-center bg-custom mt-2 mb-2`}
            >
              { loading ? "Loading...." : "Sign Up"  }
            </Button>
          </div>
        </form>
        <Link
          href={"/login"}
          className="text-center text-slate-800 underline cursor-pointer"
        >
          Already have an account? Login
        </Link>

        <FooterForm />
      </div>
    </div>
  );
}

export default SignUp;
