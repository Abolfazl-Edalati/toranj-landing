import React from "react";

type Props = React.ComponentPropsWithoutRef<"a">;

export default function Button({ children, className, href }: Props) {
  return (
    <a
      href={href}
      className={[
        className,
        "text-accent-primary text-[15px] bg-neutral p-normal rounded-xl border border-neutral transition-all duration-200 transi hover:bg-accent hover:text-accent-secondary ",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
