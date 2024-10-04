"use client";
import Reveal, { Fade, Slide } from "react-awesome-reveal";
import { cn } from "@/utils/utils";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { keyframes } from "@emotion/react";

type ContainerProps = {
  children: ReactElement;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  return (
    <>
      <Slide  direction="down" className={cn("section")}>
        <div className={cn("container p-2 pr-4 mb-10")}> {children}</div>
      </Slide>
    </>
  );
};
