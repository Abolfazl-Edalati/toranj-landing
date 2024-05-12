import Button from "../ui/button";

export default function Footer() {
  return (
    <div className="flex flex-col relative gap-11 py-9 rounded-[30px] mt-10 bg-accent before:absolute before:translate-y-[-1.25rem] before:rounded-[1rem] before:bg-[#79ACAC8F] before:inset-[0.625rem] before:-z-20 max-[768px]:gap-4">
      <img
        src="./assets/svg/footer.svg"
        alt=""
        className="absolute left-0 top-0 right-0 bottom-0 pointer-events-none"
      />
      <div
        id="header-logo"
        className="flex justify-center items-center gap-3 max-[490px]:gap-1"
      >
        <span className="text-white font-bold text-2xl max-[620px]:text-xl">
          ترنــــــج
        </span>
        <img
          src="./assets/svg/logo.svg"
          className="max-[620px]:w-10 max-[620px]:h-10 max-[490px]:h-8 max-[490px]:w-8"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <span className="text-xl font-medium text-white max-[1090px]:text-lg max-[768px]:text-base max-[670px]:text-sm">
          همین الان وبسایت رستوران یا کافه خودتو راه اندازی کن
        </span>
        <Button href="https://ezteam.ir/toranj" variant={"accent"}>
          مشاهده پیش نمایش
        </Button>
      </div>
    </div>
  );
}
