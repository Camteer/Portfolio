import React, { FC } from "react";

import { Container } from "../container";
import { cn } from "@/utils/utils";
import style from "./about.module.css";
import { Section } from "../section";
import Image from "next/image";
import { CardStats } from "../card-stats";
import {
  CalendarCheck,
  ClipboardCheck,
  FolderGit2,
  GraduationCap,
} from "lucide-react";

export const About: FC = ({}) => {
  return (
    <>
      <Container>
        <Section title="Обо мне" subtitle="Узнайте больше обо мне">
          <div className={cn(style.aboutMe)}>
            <div className={cn(style.aboutMeAvatar)}>
              <div className={cn("rounded-full w-[80%] flex ")}>
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
              <p className={cn("font-openSans text-[18px] leading-6")}>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
              <p className={cn("font-openSans text-[18px] leading-6")}>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
              <div
                className={cn(
                  style.contacts,
                  "font-openSans text-[18px] leading-6"
                )}
              >
                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p>{" "}
                  <a href="/">www.karaudio.ru</a>
                </div>
                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p> <p>www.karaudio.ru</p>
                </div>

                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p> <p>www.karaudio.ru</p>
                </div>

                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p> <p>www.karaudio.ru</p>
                </div>

                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p> <p>www.karaudio.ru</p>
                </div>

                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p> <p>www.karaudio.ru</p>
                </div>
              </div>
              <p className={cn("font-openSans text-[18px] leading-6")}>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
              <p className={cn("font-openSans text-[18px] leading-6")}>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
            </div>
          </div>
          <div className={cn(style.cardStats, "")}>
            <CardStats title={"Проектов"} count={"28"}>
              <FolderGit2 size={44} color="#f87171" strokeWidth={1.25} />
            </CardStats>
            <CardStats title={"Задач"} count={"563"}>
              <ClipboardCheck size={44} color="#f87171" strokeWidth={1.25} />
            </CardStats>
            <CardStats title={"Часов"} count={"2135"}>
              <CalendarCheck size={44} color="#f87171" strokeWidth={1.25} />
            </CardStats>
            <CardStats title={"Дипломов"} count={"8"}>
              <GraduationCap size={44} color="#f87171" strokeWidth={1.25} />
            </CardStats>
          </div>
        </Section>
        <Section title="Обо мне" subtitle="Узнайте больше обо мне">
          <div className={cn(style.aboutMe)}>
            <div className={cn(style.aboutMeAvatar)}>
              <div className={cn("rounded-full w-[80%] flex ")}>
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
              <p className={cn("font-openSans text-[18px] leading-6")}>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
              <p className={cn("font-openSans text-[18px] leading-6")}>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
              <div
                className={cn(
                  style.contacts,
                  "font-openSans text-[18px] leading-6"
                )}
              >
                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p>{" "}
                  <a href="/">www.karaudio.ru</a>
                </div>
                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p> <p>www.karaudio.ru</p>
                </div>

                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p> <p>www.karaudio.ru</p>
                </div>

                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p> <p>www.karaudio.ru</p>
                </div>

                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p> <p>www.karaudio.ru</p>
                </div>

                <div className={cn("flex gap-1")}>
                  <p className="font-bold">Сайт:</p> <p>www.karaudio.ru</p>
                </div>
              </div>
              <p className={cn("font-openSans text-[18px] leading-6")}>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
              <p className={cn("font-openSans text-[18px] leading-6")}>
                Владею крепкими знаниями Веб-разработки, включая HTML, CSS,
                JavaScript, TypeScript и Node.js. Опыт работы с
                бэкенд-фреймворком Express.js. Умею создавать интуитивно
                понятный и эффективный пользовательский интерфейс, используя
                фронтенд-фреймворки, такие как React и Vue.
              </p>
            </div>
          </div>
          <div className={cn(style.cardStats, "")}>
            <CardStats title={"Проектов"} count={"28"}>
              <FolderGit2 size={44} color="#f87171" strokeWidth={1.25} />
            </CardStats>
            <CardStats title={"Задач"} count={"563"}>
              <ClipboardCheck size={44} color="#f87171" strokeWidth={1.25} />
            </CardStats>
            <CardStats title={"Часов"} count={"2135"}>
              <CalendarCheck size={44} color="#f87171" strokeWidth={1.25} />
            </CardStats>
            <CardStats title={"Дипломов"} count={"8"}>
              <GraduationCap size={44} color="#f87171" strokeWidth={1.25} />
            </CardStats>
          </div>
        </Section>
      </Container>
    </>
  );
};
