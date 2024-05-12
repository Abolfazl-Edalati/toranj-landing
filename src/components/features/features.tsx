import SingleFeature from "./single-feature";

export default function Features() {
  const features = [
    {
      image: "./assets/svg/features/transport.svg",
      title: "روش‌های اختصاصی حمل و نقل",
      desc: "پیک، تحویل حضوری ،حاضر در رستوران",
    },
    {
      image: "./assets/svg/features/current-order-status.svg",
      title: "وضعیت فعلی سفارش شما",
      desc: "پیک در راه , در حال آماده سازی , تحویل داده شد",
    },
    {
      image: "./assets/svg/features/pishnahadat-afzodani.svg",
      title: "پیشنهادات افزودنی",
      desc: "نوشابه , خورشت ماست , دلستر و ...",
    },
    {
      image: "./assets/svg/features/emkan-sabt-chand-address.svg",
      title: "امکان ثبت چند آدرس",
      desc: "لیستی از آدرس هایی که مقصد های شما هست .",
    },
    {
      image: "./assets/svg/features/vorod-sarie.svg",
      title: "ورود سریع",
      desc: "ورورد و ثبت نام فقط با یک شماره موبایل",
    },
    {
      image: "./assets/svg/features/time.svg",
      title: "وضعیت بازو بسته بودن رستوران",
      desc: "تایین ساعات کاری و روز های تعطیل",
    },
    {
      image: "./assets/svg/features/other-branches.svg",
      title: "نمایش نمایندگی های رستوران",
      desc: "نمایندگی های دیگرتون رو به نمایش بگذارید.",
    },
    {
      image: "./assets/svg/features/namayesh-sefareshat-faal.svg",
      title: "نمایش سفارش فعال",
      desc: "دسترسی سریع کاربر به سفارش در حال تحویل",
    },
    {
      image: "./assets/svg/features/etelaat-resturant.svg",
      title: "اطلاعات رستوران",
      desc: "لوکیشن , شماره های تماس و ...",
    },
    {
      image: "./assets/svg/features/pishnahad-sarashpaz.svg",
      title: "پیشنهاد سر آشپز",
      desc: "پیشنهاد غذای روز , دسر های روز و ...",
    },
    {
      image: "./assets/svg/features/location.svg",
      title: "تعیین آدرس از روی نقشه",
      desc: "پر کردن خودکار فیلد آدرس شما",
    },
    {
      image: "./assets/svg/features/QR-code.svg",
      title: "اسکن از روی میز",
      desc: "اسکن کن سفارش بده !",
    },
    {
      image: "./assets/svg/features/sefaresh-dobare.svg",
      title: "سفارش دوباره",
      desc: "خیلی سریع با یک دکمه سفارش های قبلیتو سفارش بده !",
    },
    {
      image: "./assets/svg/features/hazine-baste-bandi.svg",
      title: "هزینه بسته بندی",
      desc: "تعیین هزینه دسته بندی",
    },
    {
      image: "./assets/svg/features/takhfifat-emroz.svg",
      title: "تخفیفات امروز",
      desc: "تخفیف های امروز رو به مشتری هات پیشنهاد بده !",
    },
    {
      image: "./assets/svg/features/order-time.svg",
      title: "ساعت تحویل سفارش",
      desc: "محاسبه خودکار زمان تحویل سفارش",
    },
    {
      image: "./assets/svg/features/namayesh-sefareshat-shoma.svg",
      title: "نمایش سفارشات شما",
      desc: "زمان باقی مانده , سفارشات فعلی , سفارشات تکمیل شده",
    },
    {
      image: "./assets/svg/features/chand-sabk-herosection.svg",
      title: "چند سبک هیروسکشن",
      desc: "محاسبه خودکار زمان تحویل سفارش",
    },
    {
      image: "./assets/svg/features/entekhab-ravesh-pardakht.svg",
      title: "انتخاب روش پرداخت",
      desc: "انتخاب روش پرداخت به دو روش آنلاین و پرداخت در محل",
    },
    {
      image: "./assets/svg/features/chand-noe-sabk-namayesh.svg",
      title: "چند نوع سبک نمایش",
      desc: "تنوع بالا در نمایش محصولات شما",
    },
  ];

  return (
    <div
      id="features"
      className="flex flex-col gap-16 mb-32 max-[970px]:mb-20 max-[880px]:gap-10 max-[620px]:mb-16 max-[550px]:gap-6"
    >
      <span className="text-4xl text-accent font-bold text-center max-[880px]:text-3xl max-[550px]:text-2xl">
        امکانات و ویژگی ها
      </span>
      <div className="grid grid-cols-4 gap-y-12 max-[1250px]:grid-cols-3 max-[1250px]:gap-y-10 max-[870px]:grid-cols-2 max-[550px]:gap-y-6 max-[550px]:grid-cols-1">
        {features.map((elm, index) => (
          <SingleFeature
            key={index}
            image={elm.image}
            title={elm.title}
            desc={elm.desc}
          />
        ))}
      </div>
    </div>
  );
}
