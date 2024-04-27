import SingleDemo from "./single-demo";

const demos = [
  {
    title: "دمو ترنج",
    imageD: "/assets/svg/demo/demo-1/demo-1-D.webp",
    imageM: "/assets/svg/demo/demo-1/demo-1-M.webp",
    imageQR: "/assets/svg/demo/demo-1/demo-1-qr-code.png",
    href: "https://ezteam.ir/toranj",
    isReveresed: false,
  },
  {
    title: "دمو ترنج",
    imageD: "/assets/svg/demo/demo-1/demo-1-D.webp",
    imageM: "/assets/svg/demo/demo-1/demo-1-M.webp",
    imageQR: "/assets/svg/demo/demo-1/demo-1-qr-code.png",
    href: "https://ezteam.ir/toranj",
    isReveresed: true,
  },
];
export default function Demos() {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-[#F5F5F5] p-10 max-[1130px]:px-5 max-[600px]:px-3 max-[600px]:py-6  mb-32 max-[970px]:mb-20 max-[620px]:mb-16">
      <img
        src="/assets/svg/demo/demo-1/rectangle.svg"
        alt=""
        className="absolute -right-20 top-56 max-[600px]:top-28"
      />
      <div className="space-y-28">
        {demos.map((d, index) => (
          <SingleDemo
            key={index}
            href={d.href}
            imageD={d.imageD}
            imageM={d.imageM}
            imageQR={d.imageQR}
            title={d.title}
            isReveresed={d.isReveresed}
          />
        ))}
      </div>
    </div>
  );
}
