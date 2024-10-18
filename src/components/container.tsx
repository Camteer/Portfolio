"use client";
import { Slide } from "react-awesome-reveal";
import { cn } from "@/utils/utils";
import React, { FC, ReactElement } from "react";

type ContainerProps = {
  children: ReactElement;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <>
      <Slide direction="up" className={cn(className, "section z-0")}>
        <div className={cn("p-2 pr-4 container")}>{children}</div>
      </Slide>
    </>
  );
};
