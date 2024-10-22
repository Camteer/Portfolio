import { cn } from "@/utils/utils";
import React, { FC, ReactElement } from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  children?: ReactElement | ReactElement[];
  className?: string;
};

export const Section: FC<SectionProps> = ({
  children,
  className,
  title,
  subtitle,
}) => {
  return (
    <>
      <div className={cn("section__container p-5", className)}>
        <div className="flex text-nowrap pb-7">
          <h1 className="text-gray-400 font-montserrat text-[20px] leading-[20px]">{title}</h1>
          <div className="border-b-2 w-full border-red-900 ml-2 h-1 self-center"></div>
        </div>
        {subtitle ? <h2 className={cn('text-[36px] font-raleway font-semibold  text-zinc-400')}>{subtitle}</h2> : <></>}
        <div>{children}</div>
      </div>
    </>
  );
};
