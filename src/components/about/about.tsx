"use client";
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
import { Stacks } from "../stacks";
import { Tool } from "../tools";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export const About: FC = ({}) => {
  return (
    <>
      <Container>
        <div className={cn("flex justify-center flex-col items-center mb-[50px]")}>
          <Section title="Обо мне" subtitle="Узнайте больше обо мне">
            <div className={cn(style.aboutMe)}>
              <div className={cn(style.aboutMeAvatar)}>
                <div className={cn("rounded-full w-[80%] flex")}>
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
                <FolderGit2 size={44} color="#BE264C" strokeWidth={1.25} />
              </CardStats>
              <CardStats title={"Задач"} count={"563"}>
                <ClipboardCheck size={44} color="#BE264C" strokeWidth={1.25} />
              </CardStats>
              <CardStats title={"Часов"} count={"2135"}>
                <CalendarCheck size={44} color="#BE264C" strokeWidth={1.25} />
              </CardStats>
              <CardStats title={"Дипломов"} count={"8"}>
                <GraduationCap size={44} color="#BE264C" strokeWidth={1.25} />
              </CardStats>
            </div>
          </Section>
          <Section title="Мой стек" className="">
            <div className={cn(style.stackList)}>
              <Stacks name="Html" scaleWidth={95}></Stacks>
              <Stacks name="CSS/Sass/scss" scaleWidth={95}></Stacks>
              <Stacks name="javascripts" scaleWidth={90}></Stacks>
              <Stacks name="Typescripts" scaleWidth={90}></Stacks>
              <Stacks name="React/Next" scaleWidth={90}></Stacks>
              <Stacks name="Vue/nuxt" scaleWidth={85}></Stacks>
              <Stacks name="Jest" scaleWidth={80}></Stacks>
              <Stacks name="cypress" scaleWidth={80}></Stacks>
              <Stacks name="node js" scaleWidth={75}></Stacks>
              <Stacks name="Express" scaleWidth={75}></Stacks>
              <Stacks name="Postgresql" scaleWidth={70}></Stacks>
              <Stacks name="mongodb" scaleWidth={70}></Stacks>
              <Stacks name="prisma" scaleWidth={70}></Stacks>
              <Stacks name="mangoose" scaleWidth={70}></Stacks>
            </div>
          </Section>
          <Section title="Мой инструменты" className="">
            <div className={cn(style.toolList)}>
              <Tool name="VScode">
                <p>
                  <img src="https://skillicons.dev/icons?i=vscode" />
                </p>
              </Tool>
              <Tool name="Postman">
                <p>
                  <img src="https://skillicons.dev/icons?i=postman" />
                </p>
              </Tool>
              <Tool name="Figma">
                <p>
                  <img src="https://skillicons.dev/icons?i=figma" />
                </p>
              </Tool>

              <Tool name="Photoshop">
                <p>
                  <img src="https://skillicons.dev/icons?i=ps" />
                </p>
              </Tool>
              <Tool name="Webpack">
                <p>
                  <img src="https://skillicons.dev/icons?i=webpack" />
                </p>
              </Tool>
              <Tool name="Vite">
                <p>
                  <img src="https://skillicons.dev/icons?i=vite" />
                </p>
              </Tool>

              <Tool name="Git">
                <p>
                  <img src="https://skillicons.dev/icons?i=git" />
                </p>
              </Tool>

              <Tool name="GitHub">
                <p>
                  <img src="https://skillicons.dev/icons?i=github" />
                </p>
              </Tool>
              <Tool name="Docker">
                <p>
                  <img src="https://skillicons.dev/icons?i=docker" />
                </p>
              </Tool>

              <Tool name="Npm">
                <p>
                  <img src="https://skillicons.dev/icons?i=npm" />
                </p>
              </Tool>

              <Tool name="Yarn">
                <p>
                  <img src="https://skillicons.dev/icons?i=yarn" />
                </p>
              </Tool>
              <Tool name="Nginx">
                <p>
                  <img src="https://skillicons.dev/icons?i=nginx" />
                </p>
              </Tool>
              <Tool name="Tailwind">
                <p>
                  <img src="https://skillicons.dev/icons?i=tailwind" />
                </p>
              </Tool>

              <Tool name="Babel">
                <p>
                  <img src="https://skillicons.dev/icons?i=babel" />
                </p>
              </Tool>
              <Tool name="Linux">
                <p>
                  <img src="https://skillicons.dev/icons?i=linux" />
                </p>
              </Tool>
              <Tool name="NestJS">
                <p>
                  <img src="https://skillicons.dev/icons?i=nestjs" />
                </p>
              </Tool>
              <Tool name="Notion">
                <p>
                  <img src="https://skillicons.dev/icons?i=notion" />
                </p>
              </Tool>
              <Tool name="Obsidian">
                <p>
                  <img src="https://skillicons.dev/icons?i=obsidian" />
                </p>
              </Tool>
              <Tool name="Vercel">
                <p>
                  <img src="https://skillicons.dev/icons?i=vercel" />
                </p>
              </Tool>
              <Tool name="Webstorm">
                <p>
                  <img src="https://skillicons.dev/icons?i=webstorm" />
                </p>
              </Tool>
            </div>
          </Section>
          <Section title="Сертификаты">
            <Carousel className="w-full ">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <div>
                        <div className="flex aspect-square items-center justify-center p-6 bg-red-400">
                          <span className="text-2xl font-semibold">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-none bg-transparent w-[5rem] h-[5rem]" />
              <CarouselNext className="border-none bg-transparent w-[5rem] h-[5rem]" />
            </Carousel>
          </Section>
        </div>
      </Container>
    </>
  );
};
