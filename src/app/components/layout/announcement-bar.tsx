
export default function AnnouncementBar() {
  return (
    <div className="flex min-h-8 items-center justify-center bg-olive-500 px-3 py-2 text-center text-xs font-medium tracking-wide text-white sm:px-4 sm:text-sm">
      <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>
        Enjoy free shipping over $100
        </span>

    

        <a
          href="/shop"
          className="shrink-0 underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
        >
          Shop now
        </a>
      </p>
    </div>
  );
}
