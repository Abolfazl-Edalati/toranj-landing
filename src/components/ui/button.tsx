import React from "react";

type Props = React.ComponentPropsWithoutRef<"a">;

export default function Button({ children, className, href }: Props) {
  return (
    <a
      href={href}
      className={[
        className,
        "text-accent-primary size-6 bg-neutral p-normal rounded-xl transition-all duration-200 transi hover:bg-accent hover:text-accent-secondary",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
