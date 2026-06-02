const chips = ["Illuminate", "Retain", "Accelerate"];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm font-medium text-gray-500">
          Everything in context.{" "}
          <span className="text-gray-900">Always up to date.</span>
        </p>
        <div className="flex items-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
