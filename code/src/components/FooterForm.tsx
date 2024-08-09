import React from "react";

function FooterForm() {
  return (
    <div className="w-full text-center bg-custom  mt-5 mt-auto py-1  rounded-b-lg">
      <p className="text-white text-xs font-size-10">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </p>
    </div>
  );
}

export default FooterForm;
