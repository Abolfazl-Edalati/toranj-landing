import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import SingleFeature from "./components/ui/single-feature";

const features = [
  {
    image: "/assets/svg/features/transport.svg",
    title: "روش‌های اختصاصی حمل و نقل",
    desc: "پیک، تحویل حضوری ، ",
  },
  {
    image: "/assets/svg/features/current-order-status.svg",
    title: "وضعیت فعلی سفارش شما",
    desc: "پیک، تحویل حضوری ، ",
  },
  {
    image: "/assets/svg/features/pishnahadat-afzodani.svg",
    title: "پیشنهادات افزودنی",
    desc: "پیک، تحویل حضوری ، ",
  },
  {
    image: "/assets/svg/features/emkan-sabt-chand-address.svg",
    title: "امکان ثبت چند آدرس",
    desc: "پیک، تحویل حضوری ، ",
  },
  {
    image: "/assets/svg/features/vorod-sarie.svg",
    title: "ورود سریع",
    desc: "پیک، تحویل حضوری ، ",
  },
  {
    image: "/assets/svg/features/time.svg",
    title: "وضعیت بازو بسته بودن رستوران",
    desc: "تعیین دقیق ساعات باز بودن رستوران",
  },
  {
    image: "/assets/svg/features/other-branches.svg",
    title: "نمایش نمایندگی های رستوران",
    desc: "تعیین دقیق ساعات باز بودن رستوران",
  },
  {
    image: "/assets/svg/features/namayesh-sefareshat-faal.svg",
    title: "نمایش سفارش فعال",
    desc: "تعیین دقیق ساعات باز بودن رستوران",
  },
  {
    image: "/assets/svg/features/etelaat-resturant.svg",
    title: "اطلاعات رستوران",
    desc: "تعیین دقیق ساعات باز بودن رستوران",
  },
  {
    image: "/assets/svg/features/pishnahad-sarashpaz.svg",
    title: "پیشنهاد سر آشپز",
    desc: "تعیین دقیق ساعات باز بودن رستوران",
  },
  {
    image: "/assets/svg/features/location.svg",
    title: "تعیین آدرس از روی نقشه",
    desc: "پر کردن خودکار فیلد آدرس شما",
  },
  {
    image: "/assets/svg/features/QR-code.svg",
    title: "اسکن از روی میز",
    desc: "پر کردن خودکار فیلد آدرس شما",
  },
  {
    image: "/assets/svg/features/sefaresh-dobare.svg",
    title: "سفارش دوباره",
    desc: "پر کردن خودکار فیلد آدرس شما",
  },
  {
    image: "/assets/svg/features/hazine-baste-bandi.svg",
    title: "هزینه بسته بندی",
    desc: "پر کردن خودکار فیلد آدرس شما",
  },
  {
    image: "/assets/svg/features/takhfifat-emroz.svg",
    title: "تخفیفات امروز",
    desc: "پر کردن خودکار فیلد آدرس شما",
  },
  {
    image: "/assets/svg/features/order-time.svg",
    title: "تخفیفات امروزساعت تحویل سفارش",
    desc: "محاسبه خودکار زمان تحویل سفارش",
  },
  {
    image: "/assets/svg/features/namayesh-sefareshat-shoma.svg",
    title: "نمایش سفارشات شما",
    desc: "محاسبه خودکار زمان تحویل سفارش",
  },
  {
    image: "/assets/svg/features/chand-sabk-herosection.svg",
    title: "چند سبک هیروسکشن",
    desc: "محاسبه خودکار زمان تحویل سفارش",
  },
  {
    image: "/assets/svg/features/entekhab-ravesh-pardakht.svg",
    title: "انتخاب روش پرداخت",
    desc: "محاسبه خودکار زمان تحویل سفارش",
  },
  {
    image: "/assets/svg/features/chand-noe-sabk-namayesh.svg",
    title: "چند نوع سبک نمایش",
    desc: "محاسبه خودکار زمان تحویل سفارش",
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="px-[72px] max-[970px]:px-14 max-[620px]:px-10 max-[490px]:px-5">
      {/* هدر */}
      {/* <Header /> */}

      {/* ویژگی ها */}
      {/* <div className="flex flex-col gap-16">
        <span className="text-4xl text-accent font-bold text-center">
          امکانات و ویژگی ها
        </span>
        <div className="grid grid-cols-4 gap-y-12">
          {features.map((elm) => (
            <SingleFeature
              image={elm.image}
              title={elm.title}
              desc={elm.desc}
            />
          ))}
        </div>
      </div> */}
    </div>
  </React.StrictMode>
);
