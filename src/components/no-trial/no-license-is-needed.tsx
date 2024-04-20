import Button from "../ui/button";

export default function NoLicenseIsNeeded() {
  return (
    <div className="relative overflow-hidden bg-accent rounded-[1.875rem] mb-32 before:absolute before:translate-y-[2.25rem] before:rounded-[1rem] before:bg-accent/20 before:inset-[1.75rem] before:-z-10 max-[970px]:mb-20 max-[620px]:mb-16 max-[460px]:before:inset-[1.5rem] max-[460px]:before:translate-y-[1.75rem]">
      <img
        src="/assets/svg/no-license.svg"
        alt="no trial is needed"
        className="absolute left-0 top-0 bottom-0 right-0 h-full object-cover"
      />
      <div className="relative flex flex-row-reverse justify-between items-center py-14 px-16 z-10 max-[1150px]:grid max-[1150px]:grid-cols-[auto,_1fr] justify-items-end gap-y-3 max-[670px]:px-9 max-[670px]:py-8 max-[520px]:px-6 max-[460px]:flex max-[460px]:flex-col max-[460px]:gap-5 max-[460px]:px-4">
        <span className="text-white text-4xl font-extrabold text-right max-[850px]:text-2xl max-[670px]:text-xl max-[520px]:text-lg">
          بدون نیاز به تمدید اشتراک سالیانه
        </span>
        <div className="flex flex-col text-right gap-3 pr-2 text-white border-r border-[#0D2222] max-[670px]:text-sm">
          <span>همه چیز در همین نسخه وجود داره </span>
          <span>نیاز به پرداخت هیچ هزینه اضافه تری نیست</span>
        </div>
        <Button variant={"accent"} className="row-start-1 row-end-3">
          خرید ترنج
        </Button>
      </div>
    </div>
  );
}
