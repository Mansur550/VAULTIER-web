
import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <article className="w-[calc((100%-0.75rem)/2)] shrink-0 snap-start md:w-auto">
      {/* Product image */}
      <div className="relative aspect-[4/5] overflow-hidden ">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, 20vw"
          className="object-contain transition-transform duration-300 hover:scale-105"
        />

        {/* Decorative plus icon, like your Figma design */}
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 text-lg font-light text-neutral-700"
        >
          +
        </span>
      </div>

      {/* Product information */}
      <div className="mt-2 space-y-1">
        <h3 className="text-xs font-normal leading-4 text-neutral-900">
          {name}
        </h3>

        <p className="text-xs font-normal text-neutral-900">
          ${price}
        </p>
      </div>
    </article>
  );
}
