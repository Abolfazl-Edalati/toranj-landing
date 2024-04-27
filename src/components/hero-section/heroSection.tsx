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
          href="https://ezteam.ir/toranj"
          variant={"accent"}
          svg
          className="font-semibold gap-4 text-base text-nowrap mt-3 max-[1090px]:p-2 max-[1090px]:text-sm max-[1090px]:mt-0 max-[670px]:text-xs max-[670px]:px-3 max-[670px]:py-2"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H2V11C2 11.5523 1.55228 12 1 12C0.447715 12 0 11.5523 0 11V1Z"
              fill="currentColor"
            />
          </svg>
          مشاهده دمو
        </Button>
      </div>
    </div>
  );
}
