import SingleAccordion from "./single-accordion";

const accordionContent = [
  {
    question: "آیا این قالب با المنتور و ووکامرس سازگاره ؟",
    answer: `کوکو سیب زمینی، کاهو، مایونز حاوی خیارشور، پنیر گودا ورقه ای، یک عدد سس کچاپ یک نفره، نان باگت یا نان تست (در سایز کلاب کاهو استفاده نمیگردد) برای تولید این ساندویچ فقط از مواد اولیه استاندارد و استریل که بسته بندی کارخانه ای دارند، استفاده میگردد.
`,
  },
  {
    question: "کدام پلن قیمتی را برای طراحان سایت پیشنهاد می کنید ؟",
    answer: `کوکو سیب زمینی، کاهو، مایونز حاوی خیارشور، پنیر گودا ورقه ای، یک عدد سس کچاپ یک نفره، نان باگت یا نان تست (در سایز کلاب کاهو استفاده نمیگردد) برای تولید این ساندویچ فقط از مواد اولیه استاندارد و استریل که بسته بندی کارخانه ای دارند، استفاده میگردد.
`,
  },
  {
    question:
      "آیا نسخه حرفه ای شامل نسخه پایه هم میشه یا باید جداگونه اون رو تهیه کنم ؟",
    answer: `کوکو سیب زمینی، کاهو، مایونز حاوی خیارشور، پنیر گودا ورقه ای، یک عدد سس کچاپ یک نفره، نان باگت یا نان تست (در سایز کلاب کاهو استفاده نمیگردد) برای تولید این ساندویچ فقط از مواد اولیه استاندارد و استریل که بسته بندی کارخانه ای دارند، استفاده میگردد.
`,
  },
  {
    question:
      "من نامحدود رو تهیه کنم یعنی محدودیتی برای دامنه ندارم درسته ؟ میتونم چندین سایت رو باهاش راه بندازم ؟",
    answer: `کوکو سیب زمینی، کاهو، مایونز حاوی خیارشور، پنیر گودا ورقه ای، یک عدد سس کچاپ یک نفره، نان باگت یا نان تست (در سایز کلاب کاهو استفاده نمیگردد) برای تولید این ساندویچ فقط از مواد اولیه استاندارد و استریل که بسته بندی کارخانه ای دارند، استفاده میگردد.
`,
  },
  {
    question: "کمی بیشتر راجب نسخه ها و پلن های متفاوت ریحون توضیح می دهید ؟",
    answer: `کوکو سیب زمینی، کاهو، مایونز حاوی خیارشور، پنیر گودا ورقه ای، یک عدد سس کچاپ یک نفره، نان باگت یا نان تست (در سایز کلاب کاهو استفاده نمیگردد) برای تولید این ساندویچ فقط از مواد اولیه استاندارد و استریل که بسته بندی کارخانه ای دارند، استفاده میگردد.
`,
  },
  {
    question: "کدام پلن قیمتی را برای طراحان سایت پیشنهاد می کنید ؟",
    answer: `کوکو سیب زمینی، کاهو، مایونز حاوی خیارشور، پنیر گودا ورقه ای، یک عدد سس کچاپ یک نفره، نان باگت یا نان تست (در سایز کلاب کاهو استفاده نمیگردد) برای تولید این ساندویچ فقط از مواد اولیه استاندارد و استریل که بسته بندی کارخانه ای دارند، استفاده میگردد.
`,
  },
];

export default function Accordion() {
  return (
    <div className="flex flex-col gap-16 mb-32 px-56 max-[1350px]:px-32 max-[1170px]:px-20 max-[1050px]:px-0 max-[970px]:mb-20 max-[880px]:gap-10 max-[620px]:mb-16 max-[550px]:gap-6">
      <span className="text-4xl text-accent font-bold text-center max-[880px]:text-3xl max-[550px]:text-2xl">
        سوالات متداول
      </span>
      <div className="flex flex-col gap-4">
        {accordionContent.map((a, index) => (
          <SingleAccordion
            key={index}
            question={a.question}
            answer={a.answer}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
