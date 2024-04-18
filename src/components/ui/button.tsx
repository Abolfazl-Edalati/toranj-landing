import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import generateClassName from "../generate-class-name";

const style = cva("no-underline text-[15px] font-normal text-white", {
  variants: {
    variant: {
      accent:
        "text-accent-primary bg-neutral p-normal rounded-xl border border-neutral transition-all duration-200 hover:bg-accent hover:text-accent-secondary",
      "text-only": "text-accent-secondary text-[16px]",
      neutral:
        "bg-accent border border-accent hover:bg-transparent hover:text-accent-primary",
    },
    svg: {
      true: "flex justify-center items-center gap-4",
    },
  },
});

type Props = React.ComponentPropsWithoutRef<"a"> & VariantProps<typeof style>;

export default function Button({
  children,
  className,
  href,
  variant,
  svg,
}: Props) {
  return (
    <a
      href={href}
      className={generateClassName(style({ variant, svg, className }))}
    >
      {children}
    </a>
  );
}
