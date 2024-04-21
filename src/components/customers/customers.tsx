import SingleCustomer from "../ui/single-customer";

export default function Customers() {
  const customers = [
    {
      title: "کافه رستوران دف",
      image: "/assets/svg/customer-1.svg",
      href: "#",
    },
    {
      title: "رستوران شاهرود فود",
      image: "/assets/svg/customer-2.svg",
      href: "#",
    },
    {
      title: "رستوران ردی منو",
      image: "/assets/svg/customer-3.svg",
      href: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-16 mb-32 max-[970px]:mb-20 max-[880px]:gap-10 max-[620px]:mb-16 max-[550px]:gap-6">
      <span className="text-4xl text-accent font-bold text-center max-[880px]:text-3xl max-[550px]:text-2xl">
        مشتریان قالب رستوران و کافه ترنج
      </span>
      <div
        className={`grid grid-cols-4 gap-y-24 overflow-auto px-28 max-[1250px]:grid-cols-3 max-[980px]:px-0 max-[680px]:grid-cols-2`}
      >
        {customers.map((c, index) => (
          <SingleCustomer
            key={index}
            title={c.title}
            image={c.image}
            href={c.href}
            varient={index % 2 === 0 ? "normal" : "reversed"}
            className="min-w-fit"
          />
        ))}
      </div>
    </div>
  );
}
