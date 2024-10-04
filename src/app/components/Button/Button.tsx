'use client'

import React from "react";
import { useRouter } from "next/navigation";


function Button() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("https://drive.google.com/file/d/1Dh_VJiZBXPRqm0j5ivw0KYlwFZc_5d-L/view?usp=sharing")}
      className="bg-[#6e57e0] hover:-translate-y-1 hover:scale-110 duration-300 rounded-full px-4 py-2 text-sm text-white mt-4 w-[100px]"
    >
      Resume
    </button>
  );
}

export default Button;
