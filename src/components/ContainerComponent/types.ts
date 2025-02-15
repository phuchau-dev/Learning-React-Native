import { ReactNode } from "react";

export interface ContainerProps {
  title?: string;
  black?: boolean;
  right?: ReactNode;
  children: ReactNode;
}
