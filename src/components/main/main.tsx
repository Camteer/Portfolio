"use client";
import { cn } from "@/utils/utils";
import React, { FC } from "react";
import style from "./main.module.css";
import { Container } from "../container";
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

export const Main: FC = ({}) => {
  return (
    <>
      <main>
        <Container className="" direction={'down'}>
          <div className={cn(style.container, "flex flex-col h-full justify-center w-full p-2 pr-4")}>
            <Fade duration={150}  cascade className={cn(style.headerP, '')}>Frontend-</Fade>
            <Fade duration={150} delay={300} cascade className={cn(style.headerP, "text-end")}>Developer</Fade>

            <Fade direction="down" duration={20} cascade className={cn(style.headerNot, "self-end font-openSans")}>
              
                I'm Kyle Craven, a digital designer and creative Webflow
                developer — I collaborate with brands globally to design
                impactful, mission-focused websites that drive results and
              
            </Fade>
          </div>
        </Container>
      </main>
    </>
  );
};
