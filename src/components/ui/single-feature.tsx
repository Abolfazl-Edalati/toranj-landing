type Props = {
  image: string;
  title: string;
  desc: string;
};

export default function SingleFeature({ image, title, desc }: Props) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <img src={image} alt={title} className="max-w-[100px] max-h-[100px]" />
      <span id="feature-title" className="text-accent text-xl font-semibold">
        {title}
      </span>
      <span
        id="feature-desc"
        className="text-accent-tint text-base font-medium"
      >
        {desc}
      </span>
    </div>
  );
}
