const chips = ["Illuminate", "Retain", "Accelerate"];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-7 sm:flex-row">
        <p className="text-sm font-medium text-gray-400">
          Everything in context.{" "}
          <span className="font-semibold text-gray-800">Always up to date.</span>
        </p>
        <div className="flex items-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-orange-100 bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-600"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
