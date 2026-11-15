export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-navy text-white">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 rounded-full border-4 border-white/15" />
          <span className="absolute inset-0 animate-spin rounded-full border-4 border-orange border-t-transparent" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">M/S SHAHI TRADERS</p>
      </div>
    </div>
  );
}
