"use client";
import React, { FC } from "react";

import { Container } from "../container";
import { cn } from "@/utils/utils";
import style from "./portfolio.module.css";
import { Section } from "../section";
import Image from "next/image";

export const Portfolio: FC = ({}) => {
  return (
    <>
      <Container>
        <Section title="Портфолио" subtitle="Мои Работы / Заказы">
          <div className={cn(style.container, "mt-4")}>
            <div
              className={cn(
                "bg-cover bg-no-repeat transition-all bg-center w-full flex justify-center items-center aspect-[1.3] rounded-[26px]",
                style.containerItem
              )}
              style={{ backgroundImage: "url(./portfolio.item.png)" }}
            >
              <div
                className={cn(" absolute z-10", style.containerItemCover)}
              ></div>
              <div className={cn("flex flex-col justify-center items-center gap-5", style.itemInfo)}>
                <p>Name</p>
                <div className={cn('flex gap-5')}>
                    <div className={cn('border rounded-[10px] p-2 text-center ')}>. . .</div>
                    <div className={cn('border rounded-[10px] p-2 text-center')}>DEMO</div>
                    <div className={cn('border rounded-[10px] p-2 text-center')}>{'</>'}</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
};
