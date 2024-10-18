import React, { FC } from "react";

import { Container } from "../container";
import { cn } from "@/utils/utils";
import style from "./about.module.css";
import { Section } from "../section";
import Image from "next/image";

export const About: FC = ({}) => {
  return (
    <>
      <Container>
        <Section title="Обо мне" subtitle="Узнайте больше обо мне">
          <div className={cn(style.aboutMe)}>
            <div className={cn(style.aboutMeAvatar)}>
              <div className={cn("rounded-full w-full flex ")}>
                <Image
                  loading="lazy"
                  src="/123.jpg"
                  width={500}
                  height={500}
                  alt="Avatar"
                  className=" rounded-full border-red-700 border-[3px]  aspect-square"
                />
              </div>
            </div>
            <div className={cn(style.aboutMeDescription)}>
              <h3 className={cn("font-raleway font-bold text-[26px]")}>
                Frontend & Backend разработчик
              </h3>
              <p>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
              <p>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
              <div className={cn(style.contacts)}>
                <div>Сайт: www.karaudio.ru</div>
                <div>Сайт: www.karaudio.ru</div>
                <div>Сайт: www.karaudio.ru</div>

                <div>Сайт: www.karaudio.ru</div>
                <div>Сайт: www.karaudio.ru</div>
                <div>Сайт: www.karaudio.ru</div>
              </div>
              <p>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
              <p>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
};
