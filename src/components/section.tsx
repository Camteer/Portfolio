import React, { FC, ReactElement } from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  children?: ReactElement;
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
      <div className="section__container p-5">
        <div className="flex text-nowrap">
          <h1 className="text-gray-400 font-bold text-[20px]">{title}</h1>
          <div className="border-b-2 mb-[] w-full border-red-900"></div>
        </div>
        {subtitle ? <h2>{subtitle}</h2> : <></>}
        <div>{children}</div>
      </div>
    </>
  );
};
