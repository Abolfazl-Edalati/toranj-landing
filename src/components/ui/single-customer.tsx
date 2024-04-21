import { cva, VariantProps } from "class-variance-authority";
import Button from "./button";
import generateClassName from "../generate-class-name";

const style = cva(["text-[#4c4c4c]", "text-lg", "font-medium"], {
  variants: {
    varient: {
      normal: "pt-2",
      reversed: "pb-2",
    },
  },
  defaultVariants: {
    varient: "normal",
  },
});

type Props = {
  title: string;
  image: string;
  href: string;
} & VariantProps<typeof style>;

export default function SingleResturant({
  title,
  image,
  href,
  varient,
}: Props) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="border-2 border-dashed border-accent rounded-[9999px]">
        <img
          src={image}
          alt={title}
          className="rounded-[9999px] w-24 h-24 m-2"
        />
      </div>
      <span className={generateClassName(style({ varient }))}>
        رستوران {title}
      </span>
      <Button
        variant={"text-only"}
        svg
        className="text-accent-secondary gap-1 cursor-pointer"
        href={href}
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3334 10.2917C11.175 10.2917 11.0167 10.2334 10.8917 10.1084C10.65 9.8667 10.65 9.4667 10.8917 9.22503L17.725 2.3917C17.9667 2.15003 18.3667 2.15003 18.6084 2.3917C18.85 2.63337 18.85 3.03337 18.6084 3.27503L11.775 10.1084C11.65 10.2334 11.4917 10.2917 11.3334 10.2917Z"
            fill="#A7D397"
          />
          <path
            d="M18.8334 6.79175C18.4917 6.79175 18.2084 6.50841 18.2084 6.16675V2.79175H14.8334C14.4917 2.79175 14.2084 2.50841 14.2084 2.16675C14.2084 1.82508 14.4917 1.54175 14.8334 1.54175H18.8334C19.175 1.54175 19.4584 1.82508 19.4584 2.16675V6.16675C19.4584 6.50841 19.175 6.79175 18.8334 6.79175Z"
            fill="#A7D397"
          />
          <path
            d="M13 19.4584H7.99996C3.47496 19.4584 1.54163 17.5251 1.54163 13.0001V8.00008C1.54163 3.47508 3.47496 1.54175 7.99996 1.54175H9.66663C10.0083 1.54175 10.2916 1.82508 10.2916 2.16675C10.2916 2.50841 10.0083 2.79175 9.66663 2.79175H7.99996C4.15829 2.79175 2.79163 4.15841 2.79163 8.00008V13.0001C2.79163 16.8417 4.15829 18.2084 7.99996 18.2084H13C16.8416 18.2084 18.2083 16.8417 18.2083 13.0001V11.3334C18.2083 10.9917 18.4916 10.7084 18.8333 10.7084C19.175 10.7084 19.4583 10.9917 19.4583 11.3334V13.0001C19.4583 17.5251 17.525 19.4584 13 19.4584Z"
            fill="#A7D397"
          />
        </svg>
        مشاهده وبسایت
      </Button>
    </div>
  );
}
