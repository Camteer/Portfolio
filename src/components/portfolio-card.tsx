import { cn } from "@/utils/utils";
import React, { FC } from "react";
import { Button } from "./ui/button";
import style from "./portfolio/portfolio.module.css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type PortfolioCardProps = {
  name: string;
  url: string;
  demo?: string;
  description: string;
  stacks: string[];
  img: string;
};

export const PortfolioCard: FC<PortfolioCardProps> = ({
  name,
  url,
  demo,
  description,
  stacks,
  img,
}) => {
  return (
    <>
      <div
        className={cn(
          "bg-cover bg-no-repeat transition-all bg-center w-full flex justify-center items-center aspect-[1.3] rounded-[26px]",
          style.containerItem
        )}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={cn(" absolute z-10", style.containerItemCover)}></div>
        <div
          className={cn(
            "flex flex-col justify-center items-center gap-5",
            style.itemInfo
          )}
        >
          <p className={cn("font-montserrat text-[30px] font-bold")}>{name}</p>
          <div className={cn("flex gap-5")}>
            <Dialog>
              <DialogTrigger
                className={cn(
                  "border   h-9 rounded-[10px] p-2 text-center hover:scale-[1.3] transition-all font-montserrat leading-[18px]"
                )}
              >
                . . .
              </DialogTrigger>
              <DialogContent
                className={cn(
                  "max-w-[1220px] aspect-video p-10 bg-black border-[2px] rounded-[20px]"
                )}
              >
                <DialogHeader>
                  <DialogTitle
                    className={cn(
                      "text-center font-extrabold font-montserrat text-[70px]"
                    )}
                  >
                    {name}
                  </DialogTitle>

                  <DialogDescription
                    className={cn(
                      "max-w-[900px] w-full justify-center self-center"
                    )}
                  >
                    <div
                      className={cn(
                        "bg-cover bg-no-repeat  bg-center w-full aspect-video rounded-[26px] ",
                        style.containerItem
                      )}
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                  </DialogDescription>
                  <DialogDescription
                    className={cn(
                      "text-center font-normal font-montserrat text-[16px] pt-5"
                    )}
                  >
                    {description}
                  </DialogDescription>
                  <DialogDescription
                    className={cn("flex justify-center gap-3 pt-5")}
                  >
                    {stacks.map((item, key) => (
                      <p
                        key={key}
                        className="text-center font-normal font-montserrat text-[24px] uppercase text-red-600"
                      >
                        {item}/
                      </p>
                    ))}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            {demo ? (
              <a
                href={`${demo}`}
                target="_blank"
                className={cn(
                  "border rounded-[10px] h-9 p-2 text-center hover:scale-[1.3] transition-all font-montserrat leading-[18px]"
                )}
              >
                DEMO
              </a>
            ) : (
              ""
            )}
            <a
              href={`${url}`}
              target="_blank"
              className={cn(
                "border rounded-[10px] h-9 p-2 text-center hover:scale-[1.3] transition-all font-montserrat leading-[18px]"
              )}
            >
              {"</>"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
