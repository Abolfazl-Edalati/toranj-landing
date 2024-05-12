import Button from "../ui/button";

export default function Header() {
  const menuButtons = [
    { title: "امکانات و ویژگی ها", link: "#", elm: "#features" },
    { title: "مشتریان ترنج", link: "#", elm: "#customers" },
    { title: "مشاهده دموها", link: "#", elm: "#demos" },
    { title: "درباره ترنج", link: "#", elm: "" },
  ];

  return (
    <header
      id="header"
      className="relative bg-accent px-[1.5rem] py-[1rem] flex justify-between rounded-[1rem] mb-8 before:absolute before:translate-y-[1.25rem] before:rounded-[1rem] before:bg-[#79ACAC8F] before:inset-[0.625rem] before:-z-10 max-[970px]:before:inset-[0.5rem] max-[970px]:before:translate-y-[1rem] max-[620px]:p-[0.75rem] max-[620px]:before:inset-[0.375rem] max-[620px]:before:translate-y-[0.75rem] max-[620px]:mb-[1.125rem]"
    >
      <Button
        id="buy-link"
        href="https://www.rtl-theme.com/toranj-wordpress-theme/"
        variant={"accent"}
        className="max-[620px]:text-[0.875rem] max-[620px]:p-2 max-[490px]:p-1"
      >
        خرید قالب ترنج
      </Button>
      <div
        id="header-links"
        className="flex justify-between items-center gap-9 max-[970px]:hidden"
      >
        {menuButtons.map((btn, index) => (
          <Button key={index} href={btn.elm}>
            {btn.title}
          </Button>
        ))}
      </div>
      <div
        id="header-logo"
        className="flex justify-center items-center gap-3 max-[490px]:gap-1"
      >
        <span className="text-white font-bold text-2xl max-[620px]:text-xl">
          ترنج
        </span>
        <img
          src="./assets/svg/logo.svg"
          className="max-[620px]:w-10 max-[620px]:h-10 max-[490px]:h-8 max-[490px]:w-8"
          alt=""
        />
      </div>
    </header>
  );
}
