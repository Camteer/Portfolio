"use client";
import React, { FC } from "react";

import { Container } from "../container";
import { cn } from "@/utils/utils";
import style from "./contacts.module.css";
import { Section } from "../section";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Send, Share2 } from "lucide-react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Имя должно иметь более 1 символа",
  }),
  email: z.string().email({
    message: "Некорректный Email",
  }),
  theme: z.string().min(6, {
    message: "Тема должна содержать более 5 символов",
  }),
  message: z.string().min(20, {
    message: "Сообщение должно быть более 20 символов",
  }),
});

export const Contacts: FC = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      theme: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Container>
        <Section title="Контакты" subtitle="Свяжитесь со мной">
          <div className={cn("mt-4")}>
            <div className={cn(style.contacts)}>
              <div
                className={cn(
                  "w-full bg-[#141414ab] h-[126px] p-5 flex items-center  relative border-[2px] border-[#BE264C]"
                )}
              >
                <div
                  className={cn(
                    " rounded-full w-[80px] aspect-square flex justify-center items-center bg-[#141414] border-[2px] border-[#BE264C]"
                  )}
                >
                  <Phone size={44} color="#BE264C" strokeWidth={1.25} />
                </div>
                <div className="p-5">
                  <p className="font-openSans text-[36px] ">Телефон</p>
                  <p className="font-montserrat text-[20px]  ">
                    +7-906-837-14-77
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  "w-full bg-[#141414ab] h-[126px] p-5 flex items-center  relative border-[2px] border-[#BE264C]"
                )}
              >
                <div
                  className={cn(
                    " rounded-full w-[80px] aspect-square flex justify-center items-center bg-[#141414] border-[2px] border-[#BE264C]"
                  )}
                >
                  <Mail size={44} color="#BE264C" strokeWidth={1.25} />
                </div>
                <div className="p-5">
                  <p className="font-openSans text-[36px] ">Почта</p>
                  <p className="font-montserrat text-[20px]  ">
                    pavlov2001@bk.ru
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  "w-full bg-[#141414ab] h-[126px] p-5 flex items-center  relative border-[2px] border-[#BE264C]"
                )}
              >
                <div
                  className={cn(
                    " rounded-full w-[80px] aspect-square flex justify-center items-center bg-[#141414] border-[2px] border-[#BE264C]"
                  )}
                >
                  <Send size={44} color="#BE264C" strokeWidth={1.25} />
                </div>
                <div className="p-5">
                  <p className="font-openSans text-[36px] ">Телеграм</p>
                  <p className="font-montserrat text-[20px]  ">@camter</p>
                </div>
              </div>
              <div
                className={cn(
                  "w-full bg-[#141414ab] h-[126px] p-5 flex items-center  relative border-[2px] border-[#BE264C]"
                )}
              >
                <div
                  className={cn(
                    " rounded-full w-[80px] aspect-square flex justify-center items-center bg-[#141414] border-[2px] border-[#BE264C]"
                  )}
                >
                  <Share2 size={44} color="#BE264C" strokeWidth={1.25} />
                </div>
                <div className="p-5">
                  <p className="font-openSans text-[36px] ">Социальные сети</p>
                  <p className="font-montserrat text-[20px]  ">
                    +7-906-837-14-77
                  </p>
                </div>
              </div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn("space-y-8 mt-10 bg-[#1A1A1A] p-5")}
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Имя"
                          {...field}
                          className={cn(
                            "bg-[#141414] border-none text-[24px] h-10 font-inter "
                          )}
                        />
                      </FormControl>

                      <FormMessage className={cn('absolute text-red-400 font-openSans')}/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className={cn(
                            "bg-[#141414] border-none text-[24px] h-10 font-inter"
                          )}
                        />
                      </FormControl>

                      <FormMessage className={cn('absolute text-red-400 font-openSans')}/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="theme"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Тема"
                          {...field}
                          className={cn(
                            "bg-[#141414] border-none text-[24px] h-10 font-inter"
                          )}
                        />
                      </FormControl>

                      <FormMessage className={cn('absolute text-red-400 font-openSans')}/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Соощение"
                          {...field}
                          className={cn(
                            "bg-[#141414] border-none text-[24px] h-[260px] font-inter"
                          )}
                        />
                      </FormControl>
                      <FormMessage className={cn('absolute text-red-400 font-openSans')}/>
                    </FormItem>
                  )}
                />
                <Button type="submit" className={cn('bg-[#BE264C] hover:opacity-80 w-full font-medium text-[32px] h-[60px] font-inter')}>Отправить</Button>
              </form>
            </Form>
          </div>
        </Section>
      </Container>
    </>
  );
};
