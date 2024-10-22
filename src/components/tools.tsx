import { cn } from "@/utils/utils";
import React, { FC, ReactElement } from "react";
import { Bounce } from "react-awesome-reveal";

type ToolProp = {
  name?: string;
  children?: ReactElement;
};

export const Tool: FC<ToolProp> = ({ children, name }) => {
  return (
    <>
      <Bounce triggerOnce>
        <div
          className={cn(
            "w-full bg-[#141414ab] flex gap-5 p-6 items-center transition-all hover:bg-[#383737ab]"
          )}
        >
          {children}{" "}
          <p
            className={cn(
              "font-montserrat tool_text  pr-3 pb-1 font-bold text-[#d1cfcf] "
            )}
          >
            {name}
          </p>
        </div>
      </Bounce>
    </>
  );
};
