"use client";
import React, { FC } from "react";
import style from "./header.module.css";
import { cn } from "@/utils/utils";

import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export const Header: FC = ({}) => {
  return (
    <>
      <header className={cn(style.header)}>
        <div
          className={cn(
            style.headerNav,
            "flex justify-center font-inter font-normal"
          )}
        >
          <div className={cn('flex justify-between w-full max-w-[1440px] px-4')}>
            <span>
              <Link href={"/"}>Eugene pavlov</Link>
            </span>
            <Fade cascade triggerOnce>
              <ul className={cn("flex justify-between gap-10")}>
                <li>
                  <Link href={"/"}>/main</Link>
                </li>
                <li>
                  <Link href={"/about"}>/about</Link>
                </li>
                <li>
                  <Link href={"/portfolio"}>/portfolio</Link>
                </li>
                <li>
                  <Link href={"/contacts"}>/contacts</Link>
                </li>
              </ul>
            </Fade>
          </div>
        </div>
      </header>
    </>
  );
};
