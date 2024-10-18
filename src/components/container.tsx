"use client";
import { Slide } from "react-awesome-reveal";
import { cn } from "@/utils/utils";
import React, { FC, ReactElement } from "react";

type ContainerProps = {
  direction?: any;
  children: ReactElement[] | ReactElement;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className, direction='up' }) => {
  return (
    <>
      <Slide direction={direction} className={cn(className, "section z-0")}>
        {children}
      </Slide>
    </>
  );
};
