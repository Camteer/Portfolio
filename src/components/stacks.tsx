"use client";
import { cn } from "@/utils/utils";
import React, { FC } from "react";
import { useInView } from "react-intersection-observer";

type StackProps = {
  name: string;
  initialWidth?: number;
  scaleWidth: number;
};

export const Stacks: FC<StackProps> = ({
  name,
  scaleWidth,
  initialWidth = 0,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const width = inView ? scaleWidth : initialWidth;

  return (
    <>
      <div>
        <div className={cn("flex justify-between")}>
          <h3
            className={cn(
              "font-montserra uppercase text-2xl font-bold text-gray-400"
            )}
          >{`${name}`}</h3>
          <div className="flex">
            <div className=" w-4 h-4 mt-2 mr-1 rounded-full border-dotted border-[3px] animate-spin"></div>
            <p
              className={cn(
                "font-montserrat text-2xl pr-3 pb-1 font-bold text-gray-400 "
              )}
            >{`${scaleWidth} %`}</p>
          </div>
        </div>

        <div className="w-full bg-[#141414d2]">
          <div
            ref={ref}
            className={`transition-all duration-700 ease-in-out bg-[#BE264C] h-5`}
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};
