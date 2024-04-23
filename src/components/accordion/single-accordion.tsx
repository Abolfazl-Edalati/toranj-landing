import { useState } from "react";
import generateClassName from "../generate-class-name";

type AccordionProps = {
  index: number;
  question: string;
  answer: string;
};

export default function SingleAccordion({
  index,
  question,
  answer,
}: AccordionProps) {
  const [isExpended, setExpend] = useState(false);

  return (
    <details
      id="single-accordion-container"
      className="accordion p-4 border border-[#E0E0E0] rounded-[1rem] cursor-pointer"
      open={isExpended}
      onClick={(e) => {
        e.preventDefault();
        setExpend((lastState) => {
          console.log(!lastState);
          return !lastState;
        });
      }}
    >
      <summary
        id="question"
        className={generateClassName(
          "flex flex-row-reverse gap-4 justify-between items-center select-none text-right max-[870px]:text-sm max-[520px]:gap-2",
          isExpended && "border-b pb-4"
        )}
      >
        <p className="flex gap-2">
          {question}
          <span>.{index}</span>
        </p>
        <button className="min-w-8 min-h-8 bg-[#ececec] rounded-xl flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={generateClassName("plus w-3 h-3")}
            viewBox="0 0 160 160"
            fill="#676767"
          >
            <rect
              className={generateClassName(
                "vertical-line transition duration-250 ease-in-out origin-center",
                isExpended && "scale-y-0"
              )}
              x="70"
              width="20"
              height="160"
            />
            <rect className="horizontal-line" y="70" width="160" height="20" />
          </svg>
        </button>
      </summary>
      <p
        id="answer"
        className={generateClassName(
          "text-right text-accent-tint max-h-0 max-[870px]:text-sm",
          isExpended && "max-h-[9999px] pt-4"
        )}
      >
        {answer}
      </p>
    </details>
  );
}
