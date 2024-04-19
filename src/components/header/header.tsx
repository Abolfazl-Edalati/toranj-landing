import Button from "../ui/button";

export default function Header() {
  const menuButtons = [
    { title: "امکانات و ویژگی ها", link: "#" },
    { title: "درباره اپلیکیشن", link: "#" },
    { title: "مشاهده دموها", link: "https://ezteam.ir/toranj/" },
    { title: "درباره ترنج", link: "#" },
  ];

  return (
    <header
      id="header"
      className="relative bg-accent px-[24px] py-[15px] flex justify-between rounded-[16px] before:absolute before:translate-y-[1.25rem] before:rounded-[16px] before:bg-[#79ACAC8F] before:inset-[0.625rem] before:-z-10 max-[970px]:before:inset-[0.5rem] max-[970px]:before:translate-y-[1rem] max-[620px]:p-[12px] max-[620px]:before:inset-[0.375rem] max-[620px]:before:translate-y-[0.75rem]"
    >
      <Button
        id="buy-link"
        href="https://www.rtl-theme.com/toranj-wordpress-theme/"
        variant={"accent"}
        className="max-[620px]:text-[0.875rem] max-[620px]:p-2 max-[490px]:p-1"
        svg
      >
        خرید قالب ترنج
      </Button>
      <div
        id="header-links"
        className="flex justify-between items-center gap-[38px] max-[970px]:hidden"
      >
        {menuButtons.map((btn, index) => (
          <Button key={index} href={btn.link}>
            {btn.title}
          </Button>
        ))}
      </div>
      <div
        id="header-logo"
        className="flex justify-center items-center gap-3 max-[490px]:gap-1"
      >
        <span className="text-white text-2xl max-[620px]:text-xl">ترنج</span>
        <img
          src="src\assets\svg\logo.svg"
          className="max-[620px]:w-10 max-[620px]:h-10 max-[490px]:h-8 max-[490px]:w-8"
          alt=""
        />
      </div>
    </header>
  );
}