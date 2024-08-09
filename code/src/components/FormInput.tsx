import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

//***DefinePropsType*******//
type Props = {
  type: string;
  placeHolder: string;
  label: string;
  name: string;
  Desc :string | null;
};
function FormInput({ type, placeHolder, label, name ,Desc= null}: Props) {
  return (
    <div className="mb-4">
      <Label htmlFor="name" className="mb-2 text-sm font-medium text-gray">
        {label} <span className="text-red-500">*</span>
      </Label>

      <Input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-200"
        name={name}
        type={type}
        placeholder={placeHolder}
      />
      { Desc && <> 
        <p className="text-xs text-green-800">Please provide registered email address</p>
      </> }
     
    </div>
  );
}

export default FormInput;
