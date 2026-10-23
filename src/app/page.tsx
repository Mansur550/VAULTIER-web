import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      <section
        aria-labelledby="hero-title"
        className="relative isolate min-h-[440px] overflow-hidden bg-neutral-900 md:min-h-[520px] lg:min-h-[600px]"
      >
        <Image
          src="/hero.jpg"
          alt="Model wearing a neutral knit sweater and tailored trousers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[40%_center] md:object-center"
        />

        {/* Subtle overlay for readable text, without washing out the image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1440px] px-6 pb-8 text-white sm:px-10 md:bottom-10 md:px-12 md:pb-0 lg:bottom-12">
          <div className="max-w-[430px]">
            <h1
              id="hero-title"
              className="text-2xl leading-tight font-medium tracking-tight sm:text-4xl md:text-[42px]"
            >
              Elegance In Simplicity,
              <br />
              Earth's Harmony
            </h1>

            <Link
              href="/shop"
              className="mt-5 inline-flex min-h-11 items-center bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-neutral-100"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-[1440px] px-6 py-8 sm:px-10 md:px-12 md:py-10">
        <p className="max-w-3xl text-sm leading-6 text-neutral-800 sm:text-base">
          Elevate your lifestyle with a more intelligent, superior wardrobe.
          Our range is crafted sustainably with longevity in mind.
        </p>
      </section>
    </main>
  );
}