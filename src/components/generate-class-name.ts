import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function generateClassName(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames));
}
