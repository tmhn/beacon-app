export default function CtaBanner() {
  return (
    <section className="bg-orange-500 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tighter text-white sm:text-5xl">
          Ready to illuminate<br />your codebase?
        </h2>
        <p className="mb-10 text-lg text-orange-100">
          Install in seconds. No config. No setup. Just Beacon.
        </p>
        <a
          href="#"
          className="inline-block rounded-full bg-white px-9 py-3.5 text-sm font-bold text-orange-500 shadow-lg shadow-orange-700/30 transition-all hover:bg-orange-50 hover:shadow-xl"
        >
          Install the skill
        </a>
      </div>
    </section>
  );
}
