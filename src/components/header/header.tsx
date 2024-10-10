import React, { FC } from "react";
import style from "./header.module.css";
import { cn } from "@/utils/utils";
import { Container } from "../container";

export const Header: FC = ({}) => {
  return (
    <>
      <header className={cn(style.header)}>
        <div className={cn(style.headerNav, "flex justify-between ")}>
          <span> {"Eugene Pavlov"}</span>
          <ul className={cn("flex justify-between gap-10")}></ul>
        </div>
      </header>
      <main>
        <Container className="h-screen">
          <div className={cn("flex flex-col h-full justify-ce")}>
            <p className={cn(style.headerP)}>Frontend-</p>
            <p className={cn(style.headerP, "text-end")}>Developer</p>
            <p className={cn(style.headerNot, "self-end")}>
              I'm Kyle Craven, a digital designer and creative Webflow developer
              — I collaborate with brands globally to design impactful,
              mission-focused websites that drive results and achieve business
              goals
            </p>
          </div>
        </Container>
      </main>
    </>
  );
};
