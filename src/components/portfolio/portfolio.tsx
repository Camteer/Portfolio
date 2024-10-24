"use client";
import React, { FC } from "react";

import { Container } from "../container";
import { cn } from "@/utils/utils";
import style from "./portfolio.module.css";
import { Section } from "../section";
import { PortfolioCard } from "../portfolio-card";


export const Portfolio: FC = ({}) => {
  return (
    <>
      <Container>
        <Section title="Портфолио" subtitle="Мои Работы / Заказы">
          <div className={cn(style.container, "mt-4")}>
            <PortfolioCard
              name={"Portfolio"}
              url={"https://github.com/Camteer"}
              demo={"https://github.com/Camteer"}
              description={"Сайт рассказывает обо мне и демонстрирует мои работы."}
              stacks={["next", ' rest']}
              img={"./portfolio.item.png"}
            ></PortfolioCard>
            <PortfolioCard
              name={"Portfolio"}
              url={""}
              demo={""}
              description={""}
              stacks={["next", 'rest']}
              img={"./portfolio.item.png"}
            ></PortfolioCard>
            <PortfolioCard
              name={"Portfolio"}
              url={""}
              demo={""}
              description={""}
              stacks={["next"]}
              img={"./portfolio.item.png"}
            ></PortfolioCard>
            
          </div>
        </Section>
      </Container>
    </>
  );
};
