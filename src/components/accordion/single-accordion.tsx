import "./accordion.css";

type AccordionProps = {
  index: string;
  question: string;
  answer: string;
};

export default function SingleAccordion({
  index,
  question,
  answer,
}: AccordionProps) {
  return (
    <div
      id="single-accordion-container"
      className="p-4 border border-[##E0E0E0] rounded-[1rem]"
    >
      <div
        id="question"
        className="flex flex-row-reverse justify-between items-center pb-4 border-b"
      >
        <p className="flex gap-2">
          {question}
          <span>.{index}</span>
        </p>
        <button
          onClick={(e) =>
            e.currentTarget.querySelector(".plus")?.classList.toggle("minus")
          }
          className="w-8 h-8 bg-[#ececec] rounded-xl flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="plus"
            viewBox="0 0 160 160"
            fill="#676767"
          >
            <rect className="vertical-line" x="70" width="20" height="160" />
            <rect className="horizontal-line" y="70" width="160" height="20" />
          </svg>
        </button>
      </div>
      <div id="answer" className="text-right pt-4 text-accent-tint">
        {answer}
      </div>
    </div>
  );
}
