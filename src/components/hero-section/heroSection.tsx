import Button from "../ui/button";

type Props = {
  title: string;
  slogan: string;
};

export default function HeroSection({ title, slogan }: Props) {
  return (
    <div className="relative mb-28 max-[970px]:mb-20 max-[620px]:mb-16">
      <img src="/assets/img/hero-section.webp" alt="hero section image" />
      <div className="absolute right-24 top-28 flex flex-col items-end gap-6 max-[1200px]:top-20 max-[1200px]:right-16 max-[1090px]:gap-4 max-[896px]:top-12 max-[768px]:gap-3 max-[768px]:right-12 max-[670px]:top-7 max-[512px]:top-4 max-[512px]:right-8 max-[448px]:right-4">
        <span className="text-3xl font-bold text-white max-[1090px]:text-2xl max-[768px]:text-xl max-[670px]:text-lg  max-[512px]:text-base">
          {title}
        </span>
        <span className="text-xl text-neutral-tint max-[1090px]:text-lg max-[768px]:text-base max-[670px]:text-sm max-[448px]:hidden">
          {slogan}
        </span>
        <Button
          variant={"accent"}
          svg
          className="font-semibold gap-2 text-base text-nowrap mt-3 max-[1090px]:p-2 max-[1090px]:text-sm max-[1090px]:mt-0 max-[670px]:text-xs max-[670px]:p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 max-[1090px]:w-5 max-[1090px]:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
            />
          </svg>
          مشاهده دمو
        </Button>
      </div>
    </div>
  );
}
