import React, { FC, ReactElement } from "react";

type SectionProps = {
  children?: ReactElement;
  className?: string;
};

export const Section: FC<SectionProps> = ({children, className}) => {
  return (
  <>
    {children}
  </>
  );
};