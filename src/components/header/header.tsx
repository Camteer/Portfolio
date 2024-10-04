import React, { FC } from "react";
import style from "./header.module.css";
import { cn } from "@/utils/utils";
import { Container } from "../container";

export const Header: FC = ({}) => {
  return (
    <>
      <header className={cn(style.header)}>
        <div className={cn(style.headerNav, "flex justify-between")}>
          <span> {"Eugene Pavlov"}</span>
          <ul className={cn("flex justify-between gap-10")}>
            <li>/me</li>
          </ul>
        </div>

        <Container>
          <div className={cn("flex flex-col")}>
            <p className={cn(style.headerP)}>Frontend-</p>
            <p className={cn(style.headerP, "text-end")}>Developer</p>
            <p className={cn(style.headerNot)}>
              I'm Kyle Craven, a digital designer and creative Webflow developer
              — I collaborate with brands globally to design impactful,
              mission-focused websites that drive results and achieve business
              goals
            </p>
          </div>
        </Container>
        <Container>
          <div className={cn("flex flex-col")}>
            <p className={cn(style.headerP)}>Frontend-</p>
            <p className={cn(style.headerP, "text-end")}>Developer</p>
            <p className={cn(style.headerNot)}>
              I'm Kyle Craven, a digital designer and creative Webflow developer
              — I collaborate with brands globally to design impactful,
              mission-focused websites that drive results and achieve business
              goals
            </p>
          </div>
        </Container>
        <Container>
          <div className={cn("flex flex-col")}>
            <p className={cn(style.headerP)}>Frontend-</p>
            <p className={cn(style.headerP, "text-end")}>Developer</p>
            <p className={cn(style.headerNot)}>
              I'm Kyle Craven, a digital designer and creative Webflow developer
              — I collaborate with brands globally to design impactful,
              mission-focused websites that drive results and achieve business
              goals
            </p>
          </div>
        </Container>
        <Container>
          <div className={cn("flex flex-col")}>
            <p className={cn(style.headerP)}>Frontend-</p>
            <p className={cn(style.headerP, "text-end")}>Developer</p>
            <p className={cn(style.headerNot)}>
              I'm Kyle Craven, a digital designer and creative Webflow developer
              — I collaborate with brands globally to design impactful,
              mission-focused websites that drive results and achieve business
              goals
            </p>
          </div>
        </Container>
      </header>
    </>
  );
};
