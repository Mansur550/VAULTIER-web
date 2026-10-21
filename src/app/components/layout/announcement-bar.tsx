
export default function AnnouncementBar() {
    return (
      <div className="flex min-h-9 items-center justify-center bg-black px-4 py-2 text-center text-xs font-medium tracking-wide text-white">
        <p>
          Complimentary shipping on orders over $100
          <span className="mx-2 text-white/50">|</span>
          <a
            href="/shop"
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Shop now
          </a>
        </p>
      </div>
    );
  }
  