import { cn } from "@/utils/utils";
import React, { FC, ReactElement } from "react";

type CardStatsProps = {
  title: string;
  count: string | number;
  children?: ReactElement;
};

export const CardStats: FC<CardStatsProps> = ({ title, count, children }) => {
  return (
    <>
      <div
        className={cn(
          "w-full bg-[#141414ab] h-[126px] flex flex-col items-center justify-center relative border-[2px] border-[#BE264C]"
        )}
      >
        <div
          className={cn(
            "absolute top-[-40%]  rounded-full w-[80px] aspect-square flex justify-center items-center bg-[#141414] border-[2px] border-[#BE264C]"
          )}
        >
          {" "}
          {children}
        </div>
        <p className="font-openSans text-[36px] text-[#BE264C]">{count}</p>
        <p className="font-raleway text-[14px] font-bold ">{title}</p>
      </div>
    </>
  );
};
