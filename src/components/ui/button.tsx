import React from "react";

type Props = React.ComponentPropsWithoutRef<"button">;

export default function Button({ children, className }: Props) {
  return (
    <button
      className={[
        className,
        "text-accent-primary bg-neutral p-normal rounded-xl transition-all duration-200 transi hover:bg-accent hover:text-accent-secondary",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
