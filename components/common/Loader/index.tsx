import { Loader } from "@mantine/core";
import React, { useState } from "react";

const SkeletonLoader = () => {
  return (
    <div className=" min-h-[500px] max-w-md mx-auto bg-zinc shadow-lg rounded-xl p-6 space-y-4 animate-pulse ">
      <div className="h-[500px] bg-zinc-200 rounded w-full flex items-center justify-center">
        <Loader color="white" />
      </div>
      <div></div>
    </div>
  );
};

export default SkeletonLoader;
