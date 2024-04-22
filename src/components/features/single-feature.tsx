import generateClassName from "../generate-class-name";

type Props = {
  image: string;
  title: string;
  desc: string;
  className?: string;
};

export default function SingleFeature({
  image,
  title,
  desc,
  className,
}: Props) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <img
        src={image}
        alt={title}
        className={generateClassName("max-w-[100px] max-h-[100px]", className)}
      />
      <span
        id="feature-title"
        className={generateClassName(
          "text-accent text-xl font-semibold max-[880px]:text-lg",
          className
        )}
      >
        {title}
      </span>
      <span
        id="feature-desc"
        className={generateClassName(
          "text-accent-tint text-base font-medium max-[880px]:text-sm",
          className
        )}
      >
        {desc}
      </span>
    </div>
  );
}
