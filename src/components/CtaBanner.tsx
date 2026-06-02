export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to illuminate your codebase?
        </h2>
        <p className="mb-8 text-base text-orange-100">
          Get started in seconds. No config. No setup. Just Beacon.
        </p>
        <a
          href="#"
          className="inline-block rounded-lg border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          Get started free
        </a>
      </div>
    </section>
  );
}
