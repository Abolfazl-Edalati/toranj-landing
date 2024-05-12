import generateClassName from "../generate-class-name";
import Button from "../ui/button";

type Props = {
  imageD: string;
  imageM: string;
  imageQR: string;
  title: string;
  href: string;
  isReveresed?: boolean;
};

export default function SingleDemo({
  title,
  imageD,
  imageM,
  imageQR,
  href,
  isReveresed = false,
}: Props) {
  return (
    <div
      className={generateClassName(
        "flex justify-between max-[900px]:flex-col max-[900px]:gap-14 max-[600px]:gap-8",
        isReveresed && "-scale-x-100"
      )}
    >
      <div className="relative max-[1290px]:w-[465px] max-[600px]:w-[180px]">
        <img
          src={imageD}
          alt=""
          className={`${isReveresed && "-scale-x-100"}`}
        />
        <img
          src={imageM}
          alt=""
          className={generateClassName(
            "absolute -bottom-12 -right-20 max-[1290px]:w-[115px] max-[1290px]:-right-14 max-[600px]:w-[44px] max-[600px]:-right-[0] max-[600px]:-bottom-8",
            isReveresed && "-scale-x-100"
          )}
        />
      </div>
      <div className="relative flex flex-col gap-6 justify-center items-end max-[600px]:gap-3">
        <span
          className={generateClassName(
            "font-bold text-2xl max-[620px]:text-xl",
            isReveresed && "-scale-x-100"
          )}
        >
          {title}
        </span>
        <Button
          href={href}
          variant={"accent"}
          svg
          className={generateClassName(
            "font-semibold gap-4 text-base text-nowrap mt-3 max-[1090px]:p-2 max-[1090px]:text-sm max-[1090px]:mt-0 max-[670px]:text-xs max-[670px]:px-3 max-[670px]:py-2",
            isReveresed && "-scale-x-100"
          )}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H2V11C2 11.5523 1.55228 12 1 12C0.447715 12 0 11.5523 0 11V1Z"
              fill="currentColor"
            />
          </svg>
          مشاهده دمو
        </Button>
        <img
          src={imageQR}
          alt=""
          className={generateClassName(
            "shadow-[4px_4px_16px_0px_#183D3D30] rounded-[30px] max-[600px]:hidden",
            isReveresed && "-scale-x-100"
          )}
        />
        <div className="absolute -left-40 bottom-36 max-[1060px]:-bottom-8 max-[1060px]:left-4 max-[900px]:right-72 max-[900px]:left-auto max-[900px]:bottom-20 max-[600px]:bottom-auto max-[600px]:-top-20 max-[600px]:-right-2">
          <img
            src="./assets/svg/demo/demo-1/scan-text.svg"
            alt=""
            className={generateClassName(
              "max-[600px]:hidden",
              isReveresed && "-scale-x-100"
            )}
          />
          <img
            src="./assets/svg/demo/demo-1/view-text.svg"
            alt=""
            className={generateClassName(
              "hidden max-[600px]:block",
              isReveresed && "-scale-x-100"
            )}
          />
          <img
            src="./assets/svg/demo/demo-1/arrow.svg"
            alt=""
            className="absolute rotate-45 -right-full -bottom-full translate-y-3 -translate-x-2 max-[1060px]:rotate-[30deg] max-[1060px]:translate-y-0 max-[900px]:rotate-[45deg] max-[900px]:translate-y-3 max-[600px]:-left-full [600px]:right-auto max-[600px]:rotate-180 max-[600px]:translate-y-8 max-[600px]:-bottom-full max-[600px]:translate-x-0"
          />
        </div>
        <img
          src="./assets/svg/demo/demo-1/leaf.png"
          alt=""
          className="absolute -bottom-5 right-64 w-10 max-[600px]:bottom-10 max-[600px]:w-8"
        />
      </div>
    </div>
  );
}
