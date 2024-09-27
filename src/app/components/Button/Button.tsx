'use client'

import React from "react";
import { useRouter } from "next/navigation";

function Button() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/resume")}
      className="bg-[#ffc200] hover:-translate-y-1 hover:scale-110 duration-300 rounded-full px-4 py-2 text-sm text-white mt-4 w-[100px]"
    >
      Resume
    </button>
  );
}

export default Button;
